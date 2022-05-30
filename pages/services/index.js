import React from "react";
import ServicesPage from "../../components/ServicesPage";
import MainLayout from "../../components/Layout";

import Head from "next/head";

import useTranslation from 'next-translate/useTranslation'

const Services = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("common:textServices")} | Dr. Aykut Gok</title>
      </Head>
      <ServicesPage />
    </>
  );
};

Services.Layout = MainLayout;

export default Services;
