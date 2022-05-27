import React from "react";
// import AboutAcordion from '../components/About/AboutAcordion'
import AboutHeader from "../components/About/AboutHeader";
import AboutImage from "../components/About/AboutImage";
import AboutGallery from "../components/About/AboutGallery";
import { Box, Container } from "@mui/material";
import MainLayout from "../components/Layout"

const AboutUs = () => {
  return (
    <Box sx={{marginBottom: "50px"}}>
      <AboutHeader />
      <AboutImage />
      {/* <AboutAcordion /> */}
      <AboutGallery />
      <Container>
        <Box>
          <Box
            component="iframe"
            sx={{
              width: "100%",
              height: "520px"
            }}
            src="https://www.youtube.com/embed/jcdBjmk0daI?autoplay=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Box>
        </Box>
      </Container>
    </Box>
  );
};

AboutUs.Layout = MainLayout;

export default AboutUs;
