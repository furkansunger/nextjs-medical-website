import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

import { RiQuestionnaireLine } from "react-icons/ri";

import NextLink from "next/link";

import useTranslation from 'next-translate/useTranslation'

const Background = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "20.3rem",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5)," +
    "rgba(0, 0, 0, 0.5))," +
    `url("/assets/AboutHeader.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});
const FaqHeader = ({subtitle}) => {
  const { t } = useTranslation()

  return (
    <Box sx={{ width: "100%" }}>
      <Background>
        <Typography
          variant={"h1"}
          components={"h1"}
          color={"#FFF"}
          sx={{
            display: "flex",
            alignItems: "center",
            letterSpacing: "0.5rem",
            fontWeight: 800,
            fontSize: "4.3rem",
            lineHeight: "7rem",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          <RiQuestionnaireLine /> <i style={{ marginLeft: "10px" }}>{t("common:textFAQ")}</i>
        </Typography>
        <Typography
          color="#fff"
          sx={{
            fontSize: { xs: "15px", sm: "18px", md: "20px" },
            textAlign: "center",
            marginBottom: "1rem"
          }}
        >
          {subtitle}
        </Typography>
        <NextLink href="/">
          <Typography
            variant={"h1"}
            components={"h1"}
            color={"#dedede"}
            sx={{
              fontWeight: 300,
              fontSize: "1.5rem",
              borderBottom: "1px solid #FFF",
              ":hover": {
                cursor: "pointer",
              },
            }}
          >
            <i>{t("common:textHome")}</i>
          </Typography>
        </NextLink>
      </Background>
    </Box>
  );
};

export default FaqHeader;
