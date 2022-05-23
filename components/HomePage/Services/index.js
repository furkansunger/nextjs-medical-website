import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import servicesImg from "./assets/services_480x480.png";
// import { motion } from "framer-motion";

const Services = () => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },
        padding: { sm: "4rem", xs: "1rem" },
      }}
    >
      <Grid container>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            padding: "0.25rem!important",
            marginTop: { sm: "-5rem", xs: "0" },
          }}
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
          <Box
            sx={{
              border: "1px solid #e6e6e6",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              "&:hover": {
                boxShadow: "0 5px 10px 0 #e6e6e6",
              },
            }}
          >
            <img
              style={{ width: "80%", borderRadius: "50%" }}
              src="./assets/services_480x480.png"
              alt="services-img"
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: "1.5rem",
                margin: "1rem 0 0.5rem 0",
                color: "#101",
              }}
            >
              Breast Aesthetic
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "thin",
                letterSpacing: "1px",
                color: "#454",
              }}
            >
              Breast augmentation utilizes FDA approved silicone or saline
              breast implants to enhance the shape and size of the breasts.
            </Typography>
          </Box>
          {/* </motion.div> */}
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            padding: "0.25rem!important",
          }}
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
          <Box
            sx={{
              border: "1px solid #e6e6e6",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              "&:hover": {
                boxShadow: "0 5px 10px 0 #e6e6e6",
              },
            }}
          >
            <img
              style={{ width: "80%", borderRadius: "50%" }}
              src="./assets/services_480x480.png"
              alt="services-img"
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: "1.5rem",
                margin: "1rem 0 0.5rem 0",
                color: "#101",
              }}
            >
              Body Aesthetic
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "thin",
                letterSpacing: "1px",
                color: "#454",
              }}
            >
              We specialize in body contouring procedures including liposuction,
              cutting-edge tummy tuck techniques etc.
            </Typography>
          </Box>
          {/* </motion.div> */}
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            padding: "0.25rem!important",
            marginTop: { sm: "-5rem", xs: "0" },
          }}
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
          <Box
            sx={{
              border: "1px solid #e6e6e6",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              "&:hover": {
                boxShadow: "0 5px 10px 0 #e6e6e6",
              },
            }}
          >
            <img
              style={{ width: "80%", borderRadius: "50%" }}
              src="./assets/services_480x480.png"
              alt="services-img"
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: "1.5rem",
                margin: "1rem 0 0.5rem 0",
                color: "#101",
              }}
            >
              Rhinoplasty
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "thin",
                letterSpacing: "1px",
                color: "#454",
              }}
            >
              Facial plastic surgery is a popular form of cosmetic plastic
              surgery used to correct birth defects, enhance one’s natural
              features.
            </Typography>
          </Box>
          {/* </motion.div> */}
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{
            padding: "0.25rem!important",
          }}
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
          <Box
            sx={{
              border: "1px solid #e6e6e6",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              "&:hover": {
                boxShadow: "0 5px 10px 0 #e6e6e6",
              },
            }}
          >
            <img
              style={{ width: "80%", borderRadius: "50%" }}
              src="./assets/services_480x480.png"
              alt="services-img"
            />
            <Typography
              variant="h5"
              sx={{
                fontSize: "1.5rem",
                margin: "1rem 0 0.5rem 0",
                color: "#101",
              }}
            >
              Nonsurgical
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "thin",
                letterSpacing: "1px",
                color: "#454",
              }}
            >
              Skin tightening procedures can be performed on nearly any part of
              the body to improve the elasticity and texture.
            </Typography>
          </Box>
          {/* </motion.div> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
