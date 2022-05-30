import { Box } from "@mui/material";

import Head from "next/head";

import React from "react";
import FaqBody from "../components/Faq/FaqBody";
import FaqHeader from "../components/Faq/FaqHeader";
import MainLayout from "../components/Layout"

import useTranslation from 'next-translate/useTranslation'

const Faq = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("common:textFAQ")} | Dr. Aykut Gok</title>
      </Head>
      <Box>
        <FaqHeader />
        <FaqBody />
      </Box>
    </>
  );
};

Faq.Layout = MainLayout;

export default Faq;
