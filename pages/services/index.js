import React from "react";
import ServicesPage from "../../components/ServicesPage";
import MainLayout from "../../components/Layout";

import Head from "next/head";

import useTranslation from "next-translate/useTranslation";

import { getMultipleData } from "../../services/fetchers/publicData";

const Services = ({ services }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("common:textServices")} | Dr. Aykut Gok</title>
      </Head>
      <ServicesPage services={services} />
    </>
  );
};

Services.Layout = MainLayout;

export default Services;

export const getStaticProps = async (ctx) => {
  const services = await getMultipleData("services", "", "populate=*");

  return {
    props: {
      services,
    },
    revalidate: 1,
  };
};
