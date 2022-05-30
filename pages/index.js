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

import Head from "next/head";

import { getMultipleData } from "../services/fetchers/publicData";


function Home({home}) {
console.log(home)

  const { about_me_section, get_started, main_page_hero, populer_aesthetic_description, populer_aesthetic_item, portfolio_gallery, portfolio_gallery_1, portfolio_gallery_2, portfolio_gallery_3, portfolio_gallery_4 } = home;

  return (
    <>
      <Head>
        <title>Dr. Aykut Gok</title>
      </Head>
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
    </>
  );
}

Home.Layout = MainLayout;

export default Home;


export const getStaticProps = async (ctx) => {
  const home = await getMultipleData("main-page", "", "populate=main_page_hero,portfolio_gallery_1,portfolio_gallery_2,portfolio_gallery_3,portfolio_gallery_4,populer_aesthetic_item,get_started");

  return {
    props: {
      home,
    },
    revalidate: 1,
  };
};
