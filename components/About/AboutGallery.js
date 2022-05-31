import { Box, Typography } from "@mui/material";
import React from "react";
import { Masonry } from "@mui/lab";

import useTranslation from "next-translate/useTranslation";

const dummyData = [
  {
    src: "/assets/about1.jpg",
    alt: "gallery-img",
  },
  {
    src: "/assets/about2.png",
    alt: "gallery-img",
  },
  {
    src: "/assets/about3.jpg",
    alt: "gallery-img",
  },
  {
    src: "/assets/about4.jpg",
    alt: "gallery-img",
  },
  {
    src: "/assets/header-bg.jpg",
    alt: "gallery-img",
  },
  {
    src: "/assets/about1.jpg",
    alt: "gallery-img",
  },
  {
    src: "/assets/about2.png",
    alt: "gallery-img",
  },
];

const AboutGallery = ({ gallery }) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        padding: { sm: "4rem", xs: "1rem" },
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginBottom: "1rem" }}
      >
        {t("common:textGallery")}
      </Typography>
      <Masonry
        columns={{ xl: 4, md: 3, sm: 2, xs: 1 }}
        spacing={2}
        sx={{ margin: "0" }}
      >
        {gallery
          ? gallery.map((item, index) => {
              return (
                <Box key={index}>
                  <Box
                    component="img"
                    src={item && item.url}
                    alt="gallery-img"
                    sx={{
                      borderRadius: "4px",
                      display: "block",
                      width: "100%",
                    }}
                  />
                </Box>
              );
            })
          : null}
      </Masonry>
    </Box>
  );
};

export default AboutGallery;
