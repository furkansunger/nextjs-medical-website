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
      <Container sx={{ position: "relative", margin: {sm: "6rem 0", xs: "0 0 6rem 0"} }}>
        <Box
          sx={{
            position: { sm: "absolute", xs: "relative" },
            top: { sm: "-12rem", xs: "auto" },
            right: { sm: "10rem", xs: "auto" },
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
