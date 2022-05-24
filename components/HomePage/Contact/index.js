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

const Contact = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { sm: "4rem", xs: "1rem" },
      }}
    >
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
                background: "#005c71",
                color: "#fff",
                marginTop: "0.5rem",
                "&:hover": {
                  background: "#005c71",
                }
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
                <FaPhoneAlt style={{color: "#005c71"}} />
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
                <FaHome style={{color: "#005c71"}} />
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
                <FaEnvelope style={{color: "#005c71"}} />
              </IconButton>
              <Typography variant="body1">info@aykutgok.com</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      
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
    </Box>
  );
};

export default Contact;
