package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/ses"
	"github.com/awslabs/aws-lambda-go-api-proxy/core"
	"github.com/awslabs/aws-lambda-go-api-proxy/gorillamux"
	"github.com/gorilla/mux"
	"gopkg.in/gomail.v2"
)

var emailSender *ses.SES

func main() {
	emailSender = ses.New(session.New(&aws.Config{Region: aws.String("eu-west-2")}))

	r := mux.NewRouter()

	r.Path("/send-email").Methods("POST", "OPTIONS").Handler(Middleware(http.HandlerFunc(sendEmail)))

	apr := gorillamux.New(r)
	lambda.Start(lambdaProxy(apr))
}

func lambdaProxy(apr *gorillamux.GorillaMuxAdapter) func(core.SwitchableAPIGatewayRequest) (*core.SwitchableAPIGatewayResponse, error) {
	return func(req core.SwitchableAPIGatewayRequest) (*core.SwitchableAPIGatewayResponse, error) {
		return apr.Proxy(req)
	}
}

type email struct {
	Email   string `json:"email"`
	Tel     string `json:"tel"`
	Subject string `json:"subject"`
	Content string `json:"content"`
	Name    string `json:"name"`
}

func sendEmail(w http.ResponseWriter, req *http.Request) {
	var e email

	err := json.NewDecoder(req.Body).Decode(&e)
	if err != nil {
		log.Println(err)
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	content := createEmailContent(e)

	sesInput := &ses.SendRawEmailInput{
		RawMessage: &ses.RawMessage{
			Data: content,
		},
		Source: aws.String("noreply@mail.esp-animal-massage.co.uk"),
	}

	_, err = emailSender.SendRawEmail(sesInput)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"sent":true}`))

}

func createEmailContent(email email) []byte {
	m := gomail.NewMessage()
	m.SetHeader("Subject", "Contact Request")
	m.SetBody("text/html", fmt.Sprintf(
		`<h2>Website Contact Request</h2>
		
		<p>Name: %s</p>
		<p>Email Address: %s</p>
		<p>Tel No: %s</p>
		<p>Subject: %s</p>
		<br />
		<p>%s</p>`,
		email.Name,
		email.Email,
		email.Tel,
		email.Subject,
		email.Content,
	))
	m.SetHeader("From", "ESP <noreply@esp-animal-massage.co.uk>")
	m.SetHeader("To", "matt_rout92@live.co.uk")

	buf := &bytes.Buffer{}

	m.WriteTo(buf)

	return buf.Bytes()
}

// Middleware performs CORS checks
func Middleware(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {

		// This needs to be congigurable when we do security for real
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")

		if req.Method == "OPTIONS" {
			w.Header().Set("Access-Control-Max-Age", "86400") // 1 day
			w.WriteHeader(http.StatusOK)
			return
		}

		w.Header().Set("Cache-Control", "no-cache")
		h.ServeHTTP(w, req)
	})
}
