import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";

import NextLink from "next/link";

import useTranslation from 'next-translate/useTranslation'

const Background = styled(Box)((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "25.3rem",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5)," +
    "rgba(0, 0, 0, 0.5))," +
    `url(${props.backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

}));
const PortfolioHeader = ({cover}) => {
  const { t } = useTranslation()

  return (
    <Box sx={{ width: "100%" }}>
      <Background backgroundImage={cover && cover}>
        <Typography
          variant={"h1"}
          components={"h1"}
          color={"#FFF"}
          sx={{
            fontWeight: 900,
            fontSize: { xs: "3.2rem", md: "4.3rem" },
            // lineHeight: "7rem",
            marginBottom: "1rem",
            textAlign: "center"
          }}
        >
          <i>{t("common:textPortfolio")}</i>
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

export default PortfolioHeader;
