import { Box, Container } from "@mui/material";

import Head from "next/head";

import React from "react";
import ContactForm from "../components/ContactPage/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo";
import MainLayout from "../components/Layout";

import { getMultipleData } from "../services/fetchers/publicData";

import useTranslation from "next-translate/useTranslation";
import ContactHeader from "../components/ContactPage/ContactHeader";

const Contact = ({ info }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("common:textContactMe")} | Dr. Aykut Gok</title>
      </Head>
      <ContactHeader cover="https://aykutplastic.s3.eu-central-1.amazonaws.com/About_Header_3f13de1023.jpg" />
      <Box
        sx={{
          padding: "3rem 0",
          backgroundColor: "#F9FAFB",
        }}
      >
        <Container
          sx={{
            marginTop: { sm: "-9rem", xs: "-5rem" },
            borderRadius: "1rem",
            backgroundColor: "#fff",
            padding: "2rem 0",
          }}
        >
          <ContactInfo contactInfo={info} />
          <ContactForm />
        </Container>
      </Box>
    </>
  );
};

Contact.Layout = MainLayout;

export default Contact;

export const getStaticProps = async (ctx) => {
  const info = await getMultipleData("contact-us", "", "populate=social_media");

  return {
    props: {
      info,
    },
    revalidate: 1,
  };
};
