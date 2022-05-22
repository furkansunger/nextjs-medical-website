import { Box, Typography } from "@mui/material";
import React from "react";
import { Masonry } from "@mui/lab";
import { motion } from "framer-motion";

const dummyData = [
  {
    src: "./assets/about1.jpg",
    alt: "gallery-img",
  },
  {
    src: "./assets/about2.png",
    alt: "gallery-img",
  },
  {
    src: "./assets/about3.jpg",
    alt: "gallery-img",
  },
  {
    src: "./assets/about4.jpg",
    alt: "gallery-img",
  },
  {
    src: "./assets/header-bg.jpg",
    alt: "gallery-img",
  },
  {
    src: "./assets/about1.jpg",
    alt: "gallery-img",
  },
  {
    src: "./assets/about2.png",
    alt: "gallery-img",
  },
];

const AboutGallery = () => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 8rem)", xs: "calc(100% - 2rem)" },
        padding: { sm: "4rem", xs: "1rem" },
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Gallery
      </Typography>
      <Masonry
        columns={{ xl: 4, md: 3, sm: 2, xs: 1 }}
        spacing={2}
        sx={{ margin: "0" }}
      >
        {dummyData?.map((item, index) => {
          return (
            <Box key={index}>
              <img
                src={item?.src}
                alt="gallery-img"
                style={{
                  borderRadius: "4px",
                  display: "block",
                  width: "100%",
                }}
              />
            </Box>
          );
        })}
      </Masonry>
    </Box>
  );
};

export default AboutGallery;
