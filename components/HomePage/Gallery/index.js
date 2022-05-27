import { Box, Typography } from "@mui/material";
import React from "react";
import { Masonry } from "@mui/lab";
// import img1 from "./assets/gray_360x600.png";
// import img2 from "./assets/gray_360x480.png";
// import img3 from "./assets/services_480x480.png";
// import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <Box
      sx={{
        width: "100%",
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
        <Box>
          <Box
            component="img"
            src="./assets/gray_360x600.png"
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        <Box>
          <Box
            component="img"
            src="./assets/services_480x480.png"
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        <Box>
          <Box
            component="img"
            src="./assets/gray_360x480.png"
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        <Box>
          <Box
            component="img"
            src="./assets/gray_360x480.png"
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        <Box>
          <Box
            component="img"
            src="./assets/services_480x480.png"
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        <Box>
          <Box
            component="img"
            src="./assets/gray_360x600.png"
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
      </Masonry>
    </Box>
  );
};

export default Gallery;
