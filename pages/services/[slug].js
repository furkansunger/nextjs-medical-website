import {
  Grid,
  Box,
  Divider,
  Container,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { GrFormNext } from "react-icons/gr";
import MainLayout from "../../components/Layout";
import ServiceDetails from "../../components/ServicesPage/components/ServiceDetails";
import ServiceForm from "../../components/ServicesPage/components/ServiceForm";
import ServiceHeader from "../../components/ServicesPage/components/ServiceHeader";
import ServiceGallery from "../../components/ServicesPage/components/ServiceGallery";

import useTranslation from "next-translate/useTranslation";

import Head from "next/head";
import NextLink from "next/link";

import { getMultipleData } from "../../services/fetchers/publicData";

export default function ServiceDetail({service}) {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Service Detail | Dr. Aykut Gok</title>
      </Head>
      <Box sx={{ padding: "10rem 0 6rem 0" }}>
        <Container>
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<GrFormNext fontSize="small" />}
          >
            <NextLink underline="hover" color="inherit" href="/">
              {t("common:textHome")}
            </NextLink>
            <NextLink underline="hover" color="inherit" href="/services/">
              {t("common:textServices")}
            </NextLink>
            <Typography color="text.primary">Service Title</Typography>
          </Breadcrumbs>
          <ServiceGallery />
          <Grid container spacing={4}>
            <Grid item lg={8} md={7} xs={12}>
              <ServiceHeader />
              <Divider sx={{ borderStyle: "dashed", my: 5 }} />
              <ServiceDetails />
            </Grid>
            <Grid item xs={12} md={5} lg={4} sx={{ position: "relative" }}>
              <ServiceForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

ServiceDetail.Layout = MainLayout;

export const getStaticPaths = async () => {
  const services = (await getMultipleData("services", "fields=title")).map(
    ({ title }) => {
      return {
        params: title.toLowerCase().split(" ").join("-"),
      };
    }
  );

  return {
    paths: services,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const service = (
    await getMultipleData(
      "services",
      "",
      "populate=*",
      `&filters[id][$eq]=${ctx.params.title.toLowerCase().split(" ").join("-")}`
    )
  )[0];

  return {
    props: { service },
  };
};
