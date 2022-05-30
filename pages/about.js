import React from "react";
// import AboutAcordion from '../components/About/AboutAcordion'
import AboutHeader from "../components/About/AboutHeader";
import AboutImage from "../components/About/AboutImage";
import AboutGallery from "../components/About/AboutGallery";
import { Box, Container } from "@mui/material";
import MainLayout from "../components/Layout";

import Head from "next/head";

import useTranslation from "next-translate/useTranslation";

import { getMultipleData } from "../services/fetchers/publicData";

const AboutUs = ({ about, contact }) => {
  const { t } = useTranslation();

  const { career, cover, gallery, general_info, hero_image, link } = about;
  const { phone, email } = contact;

  console.log(link);

  return (
    <>
      <Head>
        <title>{t("common:textAbout")} | Dr. Aykut Gok</title>
      </Head>

      <Box sx={{ marginBottom: "50px" }}>
        <AboutHeader cover={cover} />
        <AboutImage
          hero={hero_image}
          career={career}
          generalInfo={general_info}
          contact={contact}
        />
        {/* <AboutAcordion /> */}
        <AboutGallery gallery={gallery} />
        <Container>
          <Box>
            <Box
              component="iframe"
              sx={{
                width: "100%",
                height: "520px",
              }}
              src={link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

AboutUs.Layout = MainLayout;

export default AboutUs;

export const getStaticProps = async (ctx) => {
  const about = await getMultipleData(
    "about-me",
    "",
    "populate=cover,hero_image,gallery"
  );

  const contact = await getMultipleData("contact-us");

  return {
    props: {
      about,
      contact,
    },
    revalidate: 1,
  };
};
