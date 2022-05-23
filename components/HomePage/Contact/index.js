import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FaPhoneAlt, FaHome, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },
        padding: { sm: "4rem", xs: "1rem" },
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
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography variant="h4">Contact Us</Typography>
            <Divider />
            <Box
              component="form"
              sx={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
                padding: "2rem 0",
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                type="text"
                label="Full Name"
                variant="standard"
                sx={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
                // error
                // defaultValue="John Doe"
                // helperText="Incorrect entry."
              />
              <TextField
                type="email"
                label="Email"
                variant="standard"
                sx={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
                // error
                // defaultValue="John Doe"
                // helperText="Incorrect entry."
              />
              <TextField
                type="text"
                label="Subject"
                variant="standard"
                sx={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
                // error
                // defaultValue="John Doe"
                // helperText="Incorrect entry."
              />
              <TextField
                type="text"
                label="Message"
                variant="standard"
                multiline
                rows={3}
                sx={{
                  width: "100%",
                  marginBottom: "1rem",
                }}
                // error
                // defaultValue="John Doe"
                // helperText="Incorrect entry."
              />
              <Button
                sx={{
                  background: "cadetblue",
                  color: "#fff",
                  marginTop: "0.5rem",
                }}
              >
                Send
              </Button>
            </Box>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="h4">Location</Typography>
            <Divider />
            <Box sx={{ width: "90%", padding: "2rem 0" }}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginBottom: "1rem",
                }}
              >
                <IconButton>
                  <FaPhoneAlt />
                </IconButton>
                <Typography variant="body1">+90 532 419 8868</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginBottom: "1rem",
                }}
              >
                <IconButton>
                  <FaHome />
                </IconButton>
                <Typography variant="body1">
                  Harbiye, Teşvikiye Cad, Bostan Sk. No:2 D:Kat 6, 34367
                  Şişli/İstanbul
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  marginBottom: "1rem",
                }}
              >
                <IconButton>
                  <FaEnvelope />
                </IconButton>
                <Typography variant="body1">info@aykutgok.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
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
        <Container
          sx={{ width: "100%", padding: "0!important", marginTop: "2rem" }}
        >
          <iframe
            style={{ width: "100%", height: "60vh" }}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?q=Op.%20Dr.%20Aykut%20Gok&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
            title="Op. Dr. Aykut Gok"
            aria-label="Op. Dr. Aykut Gok"
          ></iframe>
        </Container>
      {/* </motion.div> */}
    </Box>
  );
};

export default Contact;
