import { Grid, Container, Typography, Stack, Box } from "@mui/material";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { styled } from "@mui/material/styles";

import useTranslation from "next-translate/useTranslation";

const dummyData = [
  {
    id: 1,
    img: "assets/blue_480x480.png",
    title: "title1",
  },
  {
    id: 2,
    img: "assets/gray_360x480.png",
    title: "title2",
  },
  {
    id: 3,
    img: "assets/gray_360x480.png",
    title: "title3",
  },
  {
    id: 4,
    img: "assets/blue_480x480.png",
    title: "title4",
  },
];

const LINES = [
  "First Class Flights",
  "5 Star Accommodations",
  "Inclusive Packages",
  "Latest Model Vehicles",
  "Handpicked Hotels",
  "Accesibility managment",
];

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

const Treatments = ({ treatmentsDesc, treatmentsItems }) => {
  const { t } = useTranslation();

  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent={{ md: "space-between" }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              fontWeight={700}
              variant="h3"
            >
              {t("common:textTreatments")}
            </Typography>
            <Typography sx={{ my: 3, color: "text.secondary" }}>
              {treatmentsDesc}
            </Typography>

            <Stack spacing={2}>
              {treatmentsItems
                ? treatmentsItems.map((item, index) => (
                    <Box key={index}>
                      <Typography
                        sx={{ display: "flex", alignItems: "center" }}
                        variant="body1"
                      >
                        {" "}
                        <GoPrimitiveDot
                          style={{ color: "red", marginRight: "20px" }}
                        />{" "}
                        {item.title}
                      </Typography>
                    </Box>
                  ))
                : null}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={{ xs: 4, md: 3 }}>
              {dummyData.map((item, index) => (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    ...(index === 1 && {
                      display: { md: "inline-flex" },
                      alignItems: { md: "flex-end" },
                    }),
                  }}
                >
                  <Box
                    sx={{
                      width: 1,
                      borderRadius: 5,
                      position: "relative",
                      overflow: "hidden",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      style={{
                        objectFit: "contain",
                        filter: "sepia(50%)",
                      }}
                      width="100%"
                      alt={item.title}
                      src={item.img}
                      bax
                    />

                    <Stack
                      spacing={1}
                      sx={{
                        p: 3,
                        left: 0,
                        bottom: 0,
                        zIndex: 9,
                        color: "common.white",
                        position: "absolute",
                      }}
                    >
                      <Typography color="black" variant="h4" line={1}>
                        {item.title}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default Treatments;
