import { Grid, Container, Typography, Stack, Box, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  marginBottom: "4rem",
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

const PortfolioGallery = ({
  portfolio,
  portfolioGallery1,
  portfolioGallery2,
  portfolioGallery3,
  portfolioGallery4,
}) => {
  const { t } = useTranslation();

  const imageData = [
    portfolioGallery1.url,
    portfolioGallery2.url,
    portfolioGallery3.url,
    portfolioGallery4.url,
  ];

  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          alignItems={{ md: "center" }}
          justifyContent={{ md: "space-between" }}
          flexDirection={{ md: "row-reverse" }}
          sx={{ marginBottom: { xs: "0px", sm: "-130px" } }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              sx={{
                color: "text.secondary",
                textAlign: { xs: "center", sm: "start" },
              }}
              fontWeight={700}
              variant="h3"
            >
              {t("common:textPortfolio")}
            </Typography>
            <Typography sx={{ my: 3, color: "text.secondary" }}>
              {portfolio}
            </Typography>
            <Link href="/portfolio">
              <Button sx={{ color: "#fff" }} variant="contained">
                Show All
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={{ xs: 4, md: 3 }}>
              {imageData?.map((item, index) => (
                <Grid
                  key={index}
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
                      width: "100%",
                      borderRadius: "1rem",
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
                      sx={{
                        objectFit: "contain",
                        filter: "sepia(50%)",
                      }}
                      width="100%"
                      alt="portfolio-img"
                      src={item}
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
                        Title {index}
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

export default PortfolioGallery;
