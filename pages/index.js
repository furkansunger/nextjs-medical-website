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

function Home() {
  return (
    <>
      <Header />
      <Container sx={{ position: "relative", margin: {sm: "6rem 0", xs: "20rem 0"}, zIndex: "88" }}>
        <Box
          sx={{
            position: "absolute",
            top: { sm: "-12rem", xs: "-27rem" },
            right: { sm: "10rem", xs: "0" },
            
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
    </>
  );
}

Home.Layout = MainLayout;

export default Home;
