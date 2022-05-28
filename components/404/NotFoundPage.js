import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
// import Error from "../../public/assets/404-not-found.jpg";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";

import NextLink from "next/link";

import useTranslation from 'next-translate/useTranslation'

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: "0",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          padding: { sm: "2rem", xs: "1rem" },
          margin: "0",
          display: "flex",
          alignItems: "center",
          flexDirection: { sm: "row-reverse", xs: "column-reverse" },
        }}
      >
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            padding: { sm: "4rem", xs: "1rem" },
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            src="/assets/not_found.svg"
            alt="404-img"
            width="860.13137"
            height="571.14799"
            layout="responsive"
          />
        </Grid>
        <Grid item sm={6} xs={12} sx={{ padding: { sm: "4rem", xs: "1rem" } }}>
          <Typography
            variant="h1"
            sx={{
              color: "#005c71",
              fontWeight: "700",
              fontSize: { lg: "5rem", sm: "4rem", xs: "2rem" },
            }}
          >
            404
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: { lg: "2rem", sm: "1.5rem", xs: "1rem" } }}
          >
            {t("404:titleNotFound")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { lg: "1.75rem", sm: "1rem", xs: "0.75rem" },
              color: "#333",
            }}
          >
            {t("404:textNotFound")}
          </Typography>
          <NextLink href="/">
            <Button
              variant="outlined"
              sx={{
                fontSize: { lg: "1.2rem", sm: "1rem", xs: "0.7rem" },
                marginTop: "1rem",
                backgroundColor: "#00adb5",
                color: "#fff",
                borderRadius: "0.75rem",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#00adb5",
                  borderColor: "#00adb5",
                },
              }}
            >
              <BiArrowBack style={{ marginRight: "0.5rem" }} />
              {t("common:buttonGoHome")}
            </Button>
          </NextLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotFoundPage;
