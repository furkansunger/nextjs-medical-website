import MainLayout from "../components/Layout";
import {
  About,
  Contact,
  Gallery,
  Header,
  Services,
  Treatments,
  Testimonals,
  NewHeader,
  Steps
} from "../components/HomePage";
import HeaderForm from "../components/HomePage/Header/components/HeaderForm";
import { Box, Container } from "@mui/material";

function Home() {
  return (
    <>
      <NewHeader />
      <Container sx={{ position: "relative", margin: "6rem 0" }}>
        <Box sx={{ position: "absolute", top: "-12rem", right: "10rem" }}>
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
    </>
  );
}

Home.Layout = MainLayout;

export default Home;
