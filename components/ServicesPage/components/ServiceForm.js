import { Card, Stack, Box, Button, TextField, Typography, Menu, MenuItem } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import React, { useState } from "react";
import { countries } from "../../countries";

const ServiceForm = () => {
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
    <Card
      sx={{
        position: { sm: "sticky", xs: "relative" },
        top: { sm: "20vh", xs: "auto" },
        right: { sm: "5vw", xs: "auto" },
        borderRadius: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
      }}
    >
      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{ color: "#005c71" }}
        >
          Get In Touch
        </Typography>

        <Box
          component="form"
          sx={{
            width: "100%",
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}

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
              marginBottom: "0.75rem",
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
              marginBottom: "0.75rem",
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
              marginBottom: "0.75rem",
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
                    keepMounted
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
            fullWidth
            type="submit"
            variant="contained"
            disabled={disabledBtn || isEmpty}
            sx={{
              background: "#00adb5",
              color: "#fff",
              marginTop: "0.5rem",
              "&:hover": {
                background: "#00adb5",
              }
            }}
          >
            Send
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default ServiceForm;
