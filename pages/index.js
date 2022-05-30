import MainLayout from "../components/Layout";
import {
  About,
  Contact,
  Gallery,
  Header,
  Services,
  Treatments,
  Testimonals,
  Steps,
} from "../components/HomePage";
import HeaderForm from "../components/HomePage/Header/components/HeaderForm";
import { Box, Container } from "@mui/material";
import ScrollTopButton from "../components/HomePage/ScrollTopButton";

function Home() {
  return (
    <>
      <Header />
      <Container
        sx={{
          position: "relative",
          margin: { sm: "6rem auto", xs: "20rem auto" },
          zIndex: "88",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { sm: "-12rem", xs: "-27rem" },
            right: { sm: "0", xs: "0" },
            left: { sm: "0", xs: "0" },
            margin: "0 auto",
          }}
        >
          <HeaderForm />
        </Box>
      </Container>
      <About />
      {/* <Services /> */}
      <Treatments />
      <Testimonals />
      <Steps />
      {/* <Gallery /> */}
      <Contact />
      <ScrollTopButton />
    </>
  );
}

Home.Layout = MainLayout;

export default Home;
