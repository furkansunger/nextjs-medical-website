import { Grid, Container, Typography, Stack, Box, Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import useTranslation from 'next-translate/useTranslation'
import Link from "next/link";

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
const titleData = [
  {
    id: 1,
    title: "Portfolio Gallery",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis natus fugit hic ullam rem rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero commodi ipsam iste nulla inventore suscipit recusandae magni voluptatem officia qui, sapiente, consequuntur provident. Mollitia consectetur cumque rerum ducimus earum quam.",
  }
]
const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(10, 0),
  },
}));

const PortfolioGallery = () => {
  const { t } = useTranslation()

  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          alignItems={{ md: "center" }}
          justifyContent={{ md: "space-between" }}

        >
          <Grid item xs={12} md={4}>
            {
              titleData.map((item) => {
                return (
                  <>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        textAlign: { xs: "center", sm: "start" }
                      }}
                      fontWeight={700}
                      variant="h3"
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ my: 3, color: "text.secondary" }}>
                      {item.description}
                    </Typography>
                  </>
                )


              })
            }
            <Link href="/portfolio">
              <Button sx={{ color: "#fff" }} variant="contained">Show All</Button>
            </Link>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container
              spacing={{ xs: 4, md: 3 }}
            >
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
                      borderRadius: 2,
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      style={{
                        objectFit: "contain",
                        filter: "sepia(50%)",
                        boxShadow:
                          " 0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19",
                      }}
                      width="150%"
                      // height="550px"
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

export default PortfolioGallery;
