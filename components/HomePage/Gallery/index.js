import { Box, Typography } from "@mui/material";
import React from "react";
import { Masonry } from "@mui/lab";
import img1 from "../../../assets/images/gray_360x600.png";
import img2 from "../../../assets/images/gray_360x480.png";
import img3 from "../../../assets/images/services_480x480.png";
// import { motion } from "framer-motion";

const Gallery = () => {
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
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        > */}
        <Box>
          <img
            src={img1}
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        {/* </motion.div> */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        > */}
        <Box>
          <img
            src={img3}
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        {/* </motion.div> */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        > */}
        <Box>
          <img
            src={img2}
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        {/* </motion.div> */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        > */}
        <Box>
          <img
            src={img2}
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        {/* </motion.div> */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        > */}
        <Box>
          <img
            src={img3}
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        {/* </motion.div> */}
        {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        > */}
        <Box>
          <img
            src={img1}
            alt="gallery-img"
            style={{
              borderRadius: "4px",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
        {/* </motion.div> */}
      </Masonry>
    </Box>
  );
};

export default Gallery;
