import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import Logo from "./images/esp.png";
import EllieDogs from "./images/EllieDogs.jpg";
import IAAT from "./images/iaat.png";
import cmg from "./images/cmg.jpg";
import massage from "./images/elliemassage.jpg";
import horse from "./images/horse.jpg";
import horse2 from "./images/horse2.jpg";

function App() {
  return (
    // <Box
    //   fontFamily={"Cormorant"}
    //   bgcolor="#040404"
    //   height="100vh"
    //   width="100vw"
    // >
    //   <Box
    //     bgcolor="#5e340d"
    //     marginLeft={"10vw"}
    //     marginRight={"10vw"}
    //     minHeight={300}
    //     sx={{ borderRadius: "16px" }}
    //     textAlign="center"
    //   >
    //     <Typography
    //       textAlign={"center"}
    //       component="h1"
    //       variant="h1"
    //       fontSize={100}
    //       color="#f29212"
    //     >
    //       ESP
    //     </Typography>
    //     <Typography
    //       textAlign={"center"}
    //       component="h1"
    //       variant="h1"
    //       fontSize={72}
    //       color="#f29212"
    //     >
    //       Canine & Equine Massage Therapy
    //     </Typography>
    //     <Box marginTop={5}>
    //       <Grid container spacing={2}>
    //         <Grid item xs={3}>
    //           <Button>About Me</Button>
    //         </Grid>
    //         <Grid item xs={3}>
    //           <Button>About Massage Therapy</Button>
    //         </Grid>
    //         <Grid item xs={3}>
    //           <Button>Reviews</Button>
    //         </Grid>
    //         <Grid item xs={3}>
    //           <Button>Contact</Button>
    //         </Grid>
    //       </Grid>
    //     </Box>
    //   </Box>
    //   <Box bgcolor="#747474" textAlign={"center"}>
    //     <img height="20%" width="20%" src={Logo} alt={"ESP"} loading="lazy" />
    //   </Box>
    // </Box>
    <Box>
      <Box height="50vh" bgcolor="#000000" textAlign={"center"}>
        <img style={{ height: "80%" }} src={Logo} alt={"ESP"} loading="lazy" />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Button style={{ color: "#ff9201" }}>About Me</Button>
            </Grid>
            <Grid item xs={3}>
              <Button style={{ color: "#ff9201" }}>Massage Therapy</Button>
            </Grid>
            <Grid item xs={3}>
              <Button style={{ color: "#ff9201" }}>Reviews</Button>
            </Grid>
            <Grid item xs={3}>
              <Button style={{ color: "#ff9201" }}>Contact</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box color="white" bgcolor="#455d7a" minHeight="50vh">
            <Box padding={4}>
              <Typography fontWeight={"normal"} variant="h4">
                About Me
              </Typography>
              <Typography marginTop={2}>
                My name is Ellie Priday and I am a qualified Canine and Equine
                Massage Therapist with a BSc (HONS) Degree in Equine Therapy and
                Rehabilitation. Furthermore, I have successfully completed the 2
                year{" "}
                <span
                  color="white"
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => {
                    window.open("https://www.k9-massage.co.uk/");
                  }}
                >
                  Clinical Canine Massage Practitioner Programme
                </span>{" "}
                at the Canine Massage Therapy Centre with Natalie Lenton.{" "}
              </Typography>
              <Typography marginTop={2}>
                I currently live and grew up in South Wales in a household
                filled with animals, ever since I can remember, horses and dogs
                have been in my life. In my younger years I competed in dog
                agility and represented Wales in the Junior Agility
                Championships and I am now competing my most recent Border
                Collie, Taco. I have also had a competitive career with horses,
                primarily in dressage, taking my Welsh Cob Robbie to Medium
                level dressage and being successful in many national
                competitions.{" "}
              </Typography>
              <Typography marginTop={2}>
                As a member of the{" "}
                <span
                  onClick={() => {
                    window.open("https://iaat.org.uk/");
                  }}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  International Association of Animal Therapists
                </span>{" "}
                and the{" "}
                <span
                  onClick={() => {
                    window.open("https://www.k9-massageguild.co.uk/");
                  }}
                  style={{ fontWeight: "bold", cursor: "pointer" }}
                >
                  Canine Massage Guild
                </span>
                , continuous professional development is completed every year to
                update my skills and further educate myself to help your
                animals.{" "}
              </Typography>
              <Box marginTop={4}>
                <Grid container>
                  <Grid item xs={6}>
                    <span style={{ cursor: "pointer" }}>
                      <img
                        onClick={() => {
                          window.open("https://iaat.org.uk/");
                        }}
                        src={IAAT}
                        style={{ height: "150px", width: "150px" }}
                      />
                    </span>
                  </Grid>
                  <Grid item xs={6}>
                    <span style={{ cursor: "pointer" }}>
                      <img
                        onClick={() => {
                          window.open("https://www.k9-massageguild.co.uk/");
                        }}
                        src={cmg}
                        style={{ height: "150px", width: "150px" }}
                      />
                    </span>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box bgcolor="#e3e3e3" minHeight="100%">
            <Box padding={5}>
              <img src={EllieDogs} style={{ height: "100%", width: "100%" }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box padding={5} bgcolor="#e3e3e3" minHeight="100%">
            <img src={massage} style={{ height: "100%", width: "100%" }} />
            <Box marginTop={5}>
              <img src={horse2} style={{ width: "100%" }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box color="white" padding={4} bgcolor="#f95959" minHeight="100%">
            <Typography>
              Massage sessions start at £35 for both canine and equine, with
              discounts applied for multiple animals. Please feel free to
              contact me for further information regarding costs, what is
              included in a session or anything massage related.
            </Typography>
            <Box textAlign={"center"} marginTop={4}>
              <img src={horse} style={{ height: "75%", width: "75%" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
