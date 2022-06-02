import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MainLayout from "../components/Layout";
import useTranslation from "next-translate/useTranslation";
import PortfolioHeader from "../components/HomePage/About/PortfolioHeader";

import { getMultipleData } from "../services/fetchers/publicData";

import Head from "next/head";
import NextImage from "../components/UI/NextImage";

const Portfolio = ({ portfolio }) => {
  const { t, lang } = useTranslation();

  const [data, setData] = useState(portfolio);

  const filterResult = (catItem) => {
    const result = portfolio.filter(
      (item) => item.category === catItem.toLowerCase().replaceAll(" ", "_")
    );
    setData(result);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event = React.SyntheticEvent, newValue = number) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>{t("common:textPortfolio")} | Dr. Aykut Gok</title>
      </Head>
      <PortfolioHeader cover="https://aykutplastic.s3.eu-central-1.amazonaws.com/About_Header_3f13de1023.jpg" />
      <Box
        sx={{
          padding: { sm: "4rem 0", xs: "1rem 0" },
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
          <Box
            sx={{
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
              padding: { xs: "0px 10px 0px 10px", sm: "0px" },
            }}
          >
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              value={value}
              onChange={handleChange}
            >
              <Tab onClick={() => setData(portfolio)} label="All" />
              <Tab
                onClick={() => filterResult("Breast Augmentation")}
                label="Breast Augmentation"
              />
              <Tab
                onClick={() => filterResult("Facial Aesthetic")}
                label="Facial Aesthetic"
              />
              <Tab
                onClick={() => filterResult("Hair Restoration")}
                label="Hair Restoration"
              />
              <Tab
                onClick={() => filterResult("Body Contouring Surgery")}
                label="Body Contouring Surgery"
              />
              <Tab
                onClick={() => filterResult("Nonsurgical")}
                label="Nonsurgical"
              />
              <Tab onClick={() => filterResult("Dental")} label="Dental" />
            </Tabs>
          </Box>

          <Grid container>
            {data &&
              data.map((item, index) => (
                <Grid key={index} padding={5} item xs={12} sm={6} md={4}>
                  <NextImage
                    src={item.image?.url}
                    alt={item.title}
                    objectFit="cover"
                    height="16rem"
                    imageStyle={{
                      borderRadius: "1rem",
                      filter: "grayScale(50%)",
                    }}
                  />

                  <Stack spacing={1} sx={{ p: 2.5 }}>
                    <Typography variant="body1" sx={{ color: "#0009" }}>
                      {item.title}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Portfolio.Layout = MainLayout;

export default Portfolio;

export const getStaticProps = async (ctx) => {
  const portfolio = await getMultipleData("portfolios", "", "populate=*");

  const localePortfolio = await getMultipleData(
    "portfolios",
    "",
    "populate=*",
    "&locale=tr"
  );

  return {
    props: {
      portfolio,
      localePortfolio,
    },
    revalidate: 1,
  };
};
