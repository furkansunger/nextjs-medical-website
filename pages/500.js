import React from "react";
import ServerErrorPage from "../components/500/ServerErrorPage";

import Head from "next/head";

import useTranslation from 'next-translate/useTranslation'

const Error500 = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("500:titleServerError")} | Dr. Aykut Gok</title>
      </Head>
      <ServerErrorPage />
    </>
  );
};

export default Error500;
