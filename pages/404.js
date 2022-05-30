import React from "react";
import NotFoundPage from "../components/404/NotFoundPage";

import Head from "next/head";

import useTranslation from 'next-translate/useTranslation'

const Error404 = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("404:titleNotFound")} | Dr. Aykut Gok</title>
      </Head>
      <NotFoundPage />
    </>
  );
};

export default Error404;
