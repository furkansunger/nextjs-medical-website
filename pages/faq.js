import { Box } from "@mui/material";

import Head from "next/head";

import React from "react";
import FaqBody from "../components/Faq/FaqBody";
import FaqHeader from "../components/Faq/FaqHeader";
import MainLayout from "../components/Layout"

import useTranslation from 'next-translate/useTranslation'
import { getMultipleData } from "../services/fetchers/publicData";

const Faq = ({faq}) => {
  const { t } = useTranslation()

  const { subtitle, faqs } = faq
  console.log(faqs)

  return (
    <>
      <Head>
        <title>{t("common:textFAQ")} | Dr. Aykut Gok</title>
      </Head>
      <Box>
        <FaqHeader subtitle={subtitle} />
        <FaqBody faqs={faqs} />
      </Box>
    </>
  );
};

Faq.Layout = MainLayout;

export default Faq;


export const getStaticProps = async (ctx) => {
  const faq = await getMultipleData("faq", "", "populate=faqs");

  return {
    props: {
      faq,
    },
    revalidate: 1,
  };
};
