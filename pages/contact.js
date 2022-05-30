import { Box } from "@mui/material";

import Head from "next/head";

import React from "react";
import ContactForm from "../components/ContactPage/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo";
import MainLayout from "../components/Layout"

import { getMultipleData } from "../services/fetchers/publicData";

import useTranslation from 'next-translate/useTranslation'


const Contact = ({info}) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("common:textContactMe")} | Dr. Aykut Gok</title>
      </Head>
      <Box
        sx={{
          marginTop: "6rem",
          padding: "3rem 0",
          backgroundColor: "#F9FAFB",
        }}
      >
        <ContactInfo contactInfo={info} />
        <ContactForm />
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
