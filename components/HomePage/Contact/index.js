import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { FaPhoneAlt, FaHome, FaEnvelope } from "react-icons/fa";
import { countries } from "../../countries"

const Contact = () => {
  const [info, setInfo] = useState({
    phonenumber: {
      value: "",
      error: false,
      helperText: "Wrong Phone number format",
    },
    fullname: {
      value: "",
      error: false,
      helperText: "Full name should include letters only",
    },
    massage: {
      value: "",
      error: false,
      helperText: "Can't be empty",
    },
    email: {
      value: "",
      error: false,
      helperText: "Invalid Email Address",
    },
    subject: {
      value: "",
      error: false,
      helperText: "Can't be empty",
    },
  });
  const [countryCode, setCountryCode] = useState(
    `+(${countries[
      countries.findIndex((item) => item.phone === "44")
    ].phone.substring(0)}) `
  );

  const [disabledBtn, setDisabledBtn] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (e) => {
    let regex;
    switch (e.target.name) {
      case "phonenumber":
        regex = /^[0-9]{6,13}$/g;
        break;
      case "fullname":
        regex = /^[A-z]{2,15}$/g;
        break;
      case "email":
        regex =
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
        break;
    }
    const error = Boolean(!e.target.value.match(regex));
    const isEmpty = Object.values(info).forEach((el) => {
      if (!el.value) return true;
      return false;
    });
    setisEmpty(isEmpty);
    setDisabledBtn(error);
    setInfo((prev) => {
      const target = prev[e.target.name];
      return {
        ...prev,
        [e.target.name]: {
          ...target,
          value: e.target.value,
          error: error,
        },
      };
    });
  };
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
              color="primary"
              variant="standard"
              required
              label="Full Name"
              name="fullname"
              type="text"
              autoComplete="name"
              error={info.fullname.error}
              helperText={info.fullname.error ? info.fullname.helperText : ""}
              sx={{
                width: "100%",
                marginBottom: "1rem",
              }}
            />


            <TextField
              color="primary"
              variant="standard"
              required
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={handleChange}
              error={info.email.error}
              helperText={info.email.error ? info.email.helperText : ""}
              sx={{
                width: "100%",
                marginBottom: "1rem",
              }}
            />


            <TextField
              required
              variant="standard"
              type="phone"
              label="Phone Number"
              name="phonenumber"
              onChange={handleChange}
              error={info.phonenumber.error}
              helperText={info.phonenumber.error ? info.phonenumber.helperText : ""}
              sx={{
                width: "100%",
                marginBottom: "1rem",
              }}

              InputProps={{
                startAdornment: (
                  <>
                    <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
                      {countryCode}
                    </Button>
                    <Menu
                      PaperProps={{
                        style: { maxHeight: 35 * 4.5, width: "300px" },
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={() => setAnchorEl(null)}
                    >
                      {countries.map((country) => {
                        return (
                          <MenuItem
                            key={country.code}
                            onClick={() => {
                              setCountryCode(`+(${country.phone.substring(0)}) `);
                              setAnchorEl(null);
                            }}
                          >
                            <img
                              loading="lazy"
                              style={{ marginRight: "10px" }}
                              width="20"
                              src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                              alt=""
                            />
                            {country.label} ({country.code}) +{country.phone}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </>
                ),
              }}
            />
            <TextField
              required
              label="Subject"
              name="subject"
              multiline
              variant="standard"
              onChange={handleChange}
              error={info.subject.error}
              helperText={info.subject.error ? info.subject.helperText : ""}
              sx={{
                width: "100%",
                marginBottom: "1rem",
              }}
            // error
            // defaultValue="John Doe"
            // helperText="Incorrect entry."
            />
            <TextField
              required
              label="Your Message"
              name="message"
              multiline
              rows={4}
              variant="standard"
              onChange={handleChange}
              error={info.massage.error}
              helperText={info.massage.error ? info.massage.helperText : ""}
              sx={{
                width: "100%",
                marginBottom: "1rem",
              }}
            // error
            // defaultValue="John Doe"
            // helperText="Incorrect entry."
            />

            <Button

              type="submit"
              variant="contained"
              disabled={disabledBtn || isEmpty}
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
                <FaPhoneAlt style={{ color: "#005c71" }} />
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
                <FaHome style={{ color: "#005c71" }} />
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
                <FaEnvelope style={{ color: "#005c71" }} />
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
