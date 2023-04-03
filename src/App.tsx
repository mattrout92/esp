import React, { useState } from "react";
import "./App.css";
import { Box, Stack } from "@mui/system";
import {
  Button,
  Grid,
  Modal,
  SpeedDial,
  SpeedDialAction,
  Tooltip,
  Typography,
} from "@mui/material";
import Logo from "./images/esp.png";
import EllieDogs from "./images/EllieDogs.jpg";
import IAAT from "./images/iaat.png";
import cmg from "./images/cmg.jpg";
import massage from "./images/elliemassage.jpg";
import horse from "./images/horse.jpg";
import horse2 from "./images/horse2.jpg";
import ArticleIcon from "@mui/icons-material/Article";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DownloadIcon from "@mui/icons-material/Download";

const actions = [
  {
    icon: <PictureAsPdfIcon />,
    name: "Veterinary Consent Form (PDF)",
    onclick: () => {
      const url =
        "https://s3.eu-west-2.amazonaws.com/esp-animal-massage.co.uk/Veterinary+Consent+Form.pdf"; // Replace with your file URL
      // Create a link element with the download attribute and click it
      const link = document.createElement("a");
      link.href = url;
      link.download = "VeterinaryConsentForm.pdf"; // Replace with your file name
      link.click();
    },
  },
  {
    icon: <DownloadIcon />,
    name: "Veterinary Consent Form (Word)",
    onclick: () => {
      const url =
        "https://s3.eu-west-2.amazonaws.com/esp-animal-massage.co.uk/Veterinary+Consent+Form.doc"; // Replace with your file URL
      // Create a link element with the download attribute and click it
      const link = document.createElement("a");
      link.href = url;
      link.download = "VeterinaryConsentForm.doc"; // Replace with your file name
      link.click();
    },
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "90vw",
  minWidth: "80vw",
  maxHeight: "90vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflowY: "scroll",
  p: 4,
};

function App() {
  const [ccm, setCCM] = useState<boolean>(false);
  const [em, setEM] = useState<boolean>(false);
  const [mtp, setMTP] = useState<boolean>(false);

  return (
    <Box>
      <Box height="50vh" bgcolor="#000000" textAlign={"center"}>
        <img style={{ height: "80%" }} src={Logo} alt={"ESP"} loading="lazy" />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Button
                onClick={() => {
                  document.getElementById(`about-me`)?.scrollIntoView();
                }}
                style={{ color: "#ff9201" }}
              >
                About Me
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => {
                  document.getElementById(`massage-therapy`)?.scrollIntoView();
                }}
                style={{ color: "#ff9201" }}
              >
                Massage Therapy
              </Button>
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
              <Typography id="about-me" fontWeight={"normal"} variant="h4">
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
                        alt=""
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
                        alt=""
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
              <img
                src={EllieDogs}
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            padding={5}
            bgcolor="#e3e3e3"
            minHeight="100%"
            maxHeight={"100%"}
          >
            <img
              alt=""
              src={massage}
              style={{ height: "100%", width: "100%" }}
            />
            <Box marginTop={5}>
              <img alt="" src={horse2} style={{ width: "100%" }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            color="white"
            padding={5}
            bgcolor="#f95959"
            minHeight="100%"
            maxHeight={"100%"}
          >
            <Typography>
              Massage sessions start at £35 for both canine and equine, with
              discounts applied for multiple animals. Please feel free to
              contact me for further information regarding costs, what is
              included in a session or anything massage related.
            </Typography>
            <Box textAlign={"center"} marginTop={10}>
              <img alt="" src={horse} style={{ width: "75%" }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            padding={4}
            marginTop={2}
            color="white"
            bgcolor="#455d7a"
            minHeight="80vh"
            textAlign={"center"}
          >
            <Typography id="massage-therapy" fontWeight={"normal"} variant="h4">
              Massage Therapy
            </Typography>
            <Typography marginTop={5}>
              Massage is a non-invasive therapeutic technique that aims to
              reduce the risk of injury, rehabilitate muscular injuries commonly
              seen as lameness as well as improve performance. Through a
              combination of various massage techniques, including deep tissue,
              myofascial release, Swedish and sports massage, I can help your
              animal by releasing sore, tight muscles, scar tissue adhesions and
              trigger points (known as knots) that cause referred pain.
            </Typography>
            <Typography marginTop={2}>
              Additionally, massage helps to support orthopaedic conditions like
              arthritis, luxating patella, hip dysplasia and elbow dysplasia.
              Massage therapy can assist management of other conditions
              including neurological diseases such as Intervertebral Disc
              Disease (IVDD) and musculoskeletal issues including strains, thus
              easing any pain and improving the comfort of your animal.
            </Typography>
            <Typography
              marginTop={8}
              id="massage-therapy"
              fontWeight={"normal"}
              variant="h6"
            >
              Learn More
            </Typography>
            <Stack marginTop={2}>
              <Button
                onClick={() => {
                  setCCM(true);
                }}
                sx={{ marginTop: 2 }}
                variant="contained"
              >
                Clinical Canine Massage
              </Button>
              <Button
                onClick={() => {
                  setEM(true);
                }}
                sx={{ marginTop: 2 }}
                variant="contained"
              >
                Equine Massage and Rehabilitation
              </Button>
              <Button
                onClick={() => {
                  setMTP(true);
                }}
                sx={{ marginTop: 2 }}
                variant="contained"
              >
                Massage Techniques Practiced
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          transform: "translateZ(0px)",
          flexGrow: 1,
        }}
      >
        <SpeedDial
          ariaLabel="Documents"
          icon={
            <Tooltip title="View Documents">
              <ArticleIcon />
            </Tooltip>
          }
        >
          {actions.map((action) => (
            <SpeedDialAction
              onClick={action.onclick}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
      <Modal
        open={ccm}
        onClose={() => {
          setCCM(false);
        }}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Clinical Canine Massage
          </Typography>
          <Typography fontSize={10} sx={{ mt: 2 }}>
            The extent to which canine massage benefits your dog can be
            considered in accordance with “the five principles of pain”; these
            describe the categories in which canine massage facilitates
            improvement of each dog. The first category is the gait of the dog;
            how it moves and if there is any presence of lameness. The second
            considers the dogs posture; how it stands, sits and the degree of
            symmetry in the body. The third relates to your dog's activities of
            daily living, otherwise referred to as ADL's. This category explains
            how the dog carries out its day-to-day activities such as navigating
            stairs and entering and exiting vehicles. The fourth principle is
            the dogs behaviour which can often be improved through massage,
            consequently improving the dogs response to being groomed or
            examined. The final principle of pain relates to how performance can
            be affected. For instance, a sporting dog who participates in
            agility or obedience can receive beneficial effects in their
            performance. In addition, a pet dog can be found to be more
            energetic, more eager and excited to play and go for walks.
          </Typography>
          <Typography fontSize={10} sx={{ mt: 2 }}>
            Clinical Canine Massage has been clinically proven to reduce pain
            severity. Winchester University undertook clinical trials in 2021
            and found that clinical canine massage therapy treats myofascial and
            musculoskeletal pain typically derived from muscular injuries,
            arthritis and other orthopaedic conditions. Read&nbsp;
            <a href="https://bvajournals.onlinelibrary.wiley.com/doi/10.1002/vetr.586?fbclid=IwAR1nGJI-YBGwP-kHbblOfOUeHP-EYSrGsqX_wIBe1wYT1TBAmriqvDjb5_0">
              the full article here
            </a>
            .
          </Typography>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => {
              setCCM(false);
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
      <Modal
        open={em}
        onClose={() => {
          setEM(false);
        }}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Equine Massage and Rehabilitation
          </Typography>
          <Typography fontSize={10} sx={{ mt: 2 }}>
            Using skills learnt throughout a three year degree in BSc Equine
            Therapy and Rehabilitation, I can use equine massage to help reduce
            the risk of injury as well as improve the performance of your horse.
            During the consultation, a gait analysis will be performed, as well
            as a static assessment based on your horses conformation and
            intrinsic factors. Following massage treatment, an exercise plan
            will be created tailored to you and your horse to focus on the
            necessary aims to improve your horses comfort. This can include
            improving range of motion in a specific limb or joint, balance
            asymmetries by strengthening atrophied muscles or improving posture
            and gait. The exercise plan will consist of dynamic mobilisation
            exercises, stretches, pole work exercises, posture realignment,
            ground exercises and more. The aims for equine massage are to reduce
            tension and alleviate any soreness or tightness in the soft tissue,
            including muscles and fascia. Massage can also improve suppleness
            and joint range of motion, improve muscle strength and tone, improve
            joint range of motion and improve body balance, posture and
            coordination. Equine massage has the benefit of reducing stress and
            anxiety by stimulating the peripheral nervous system, as well as
            increasing circulation and lymphatic drainage. By improving these,
            the horse has a reduced risk of injury and an improved performance.
          </Typography>
          <Typography fontSize={10} sx={{ mt: 2 }}>
            There are many studies proving the benefits of massage therapy on
            horses. These include:{" "}
          </Typography>
          <Typography fontSize={10} sx={{ mt: 2 }}>
            <strong>Scott and Swenson (2009)</strong>: Reports that equine
            therapeutic massage increases range of motion and stride length as
            well as reduce activity of nociceptive pain receptors and thus
            reduce physiological stress responses.
            <br />
            <strong>Hill and Crook (2010)</strong>: Found that massage
            significantly increased passive and active limb protraction,
            therefore improving horses locomotor function and suppleness.
            <br />
            <strong>Soroko (2013)</strong>: Showed that in problem horses,
            massage effectively relieved any muscle tightness and therefore
            improved the horses performance and resolved many issues during
            riding.
            <br />
            <strong>Kowalik et al. (2016)</strong>: Found that relaxation
            massage effectively calmed down and relaxed race horses, this in
            turn improved their performance.
          </Typography>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => {
              setEM(false);
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
      <Modal
        open={mtp}
        onClose={() => {
          setMTP(false);
        }}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Massage Techniques Practiced
          </Typography>
          <Typography sx={{ mt: 2 }} fontSize={12} component="h2">
            Deep Tissue Massage
          </Typography>
          <Typography fontSize={10} sx={{ mt: 1 }}>
            Deep tissue massage focuses on deep muscles, hence helping
            conditions such as chronic muscle tension, excessive stress in deep
            muscles and chronic pain. This type of massage involves applying
            firm pressure and slow strokes to reach deeper layers of muscle and
            fascia. Deep tissue massage techniques are used to break up scar
            tissue and physically break down muscle knots or adhesions. Common
            techniques used in a deep tissue massage include 'stripping' and
            'friction' to release adhesions and realign tissue fibres.
          </Typography>
          <Typography sx={{ mt: 2 }} fontSize={12} component="h2">
            Myofascial Release: direct and indirect
          </Typography>
          <Typography fontSize={10} sx={{ mt: 1 }}>
            Myofascial release reduces pain by easing tension and tightness in
            the fascia. Fascia is a thin casing of connective tissue that
            surrounds and holds every organ, blood vessel, bone, nerve fibre and
            muscle in place. Normal fascia should feel pliable and elastic, so
            areas that feel rigid with light manual pressure will require
            myofascial release. This technique comprises of massaging, gently
            applying pressure and stretching the area to relieve tightness. The
            process may be repeated until the tension has eased. Myofascial
            release is also useful for treating skeletal muscle immobility and
            pain by relaxing contracted muscles as well as stimulating the
            stretch reflex in muscles. In turn, this improves blood, oxygen, and
            lymphatic circulation.
          </Typography>
          <Typography sx={{ mt: 2 }} fontSize={12} component="h2">
            Swedish Massage
          </Typography>
          <Typography fontSize={10} sx={{ mt: 1 }}>
            Developed to help with muscle systems used for a particular sport,
            sports massage uses a variety of approaches to help athletes in
            training; before, during, or after sports events. Sports massage is
            used to promote flexibility and suppleness, therefore help prevent
            injuries before exercise as well as assist in correcting problems
            and imbalances in soft tissue that are caused from repetitive
            activity and trauma. The pre-exercise massage increases circulation,
            reduces muscle tension, and increases flexibility. Whereas the
            post-exercise massage has aims to promote general relaxation, reduce
            muscle tension, relieve swelling, and help prevent delayed onset
            muscle soreness (DOMS). Strokes used in sports massage are like
            those used in Swedish massage as well as the use of vibrations and
            'shaking' to warm up the muscles up in preparation for exercise.
          </Typography>
          <Typography sx={{ mt: 2 }} fontSize={12} component="h2">
            The Lenton Method
          </Typography>
          <Typography fontSize={10} sx={{ mt: 1 }}>
            Clinically proven to be significantly effective on most dogs, the
            Lenton Method is canine specific and has been developed by Natalie
            Lenton of the Canine Massage Therapy Centre. Based on over ten
            year's experience massaging dogs, this method teaches the therapist
            where trigger points and strains typically manifest in the dog's
            body, and the particular massage techniques which are used to
            alleviate these. The method includes seven different protocols to be
            carried out on different areas of the body. The techniques involve
            manipulating the soft tissue to relieve hypertonicity, trigger
            points and adhesions.
          </Typography>
          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => {
              setMTP(false);
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default App;
