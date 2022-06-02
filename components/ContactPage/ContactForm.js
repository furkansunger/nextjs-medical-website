import React, { useState } from "react";

import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoadingButton } from "@mui/lab";
import {
  Grid,
  Stack,
  TextField,
  Container,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { countries } from "../countries";

import useTranslation from "next-translate/useTranslation";

import Image from 'next/image'

// const FormSchema = Yup.object().shape({
//   fullName: Yup.string().required("Full name is required"),
//   email: Yup.string()
//     .required("Email is required")
//     .email("That is not an email"),
//   subject: Yup.string().required("Subject is required"),
//   message: Yup.string().required("Message is required"),
// });

const ContactForm = () => {

  const { t } = useTranslation();

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
    <Box>
      <Container>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Box className="imageCover" sx={{position: "relative", width: "100%", height: "100%"}}>
              <Image src="/assets/contact.svg" alt="contact-img" layout="fill" />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Stack
              spacing={2}
              sx={{
                mb: 5,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h3">{t("common:textFormTitle")}</Typography>
              <Typography sx={{ color: "#666" }}>
              {t("common:textFormParagraph")}
              </Typography>
            </Stack>

            <Box component="form" >
              <Stack spacing={2.5} alignItems="flex-start">

                <TextField
                  color="primary"
                  // variant="standard"
                  required
                  label={t("common:inputName")}
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
                  // variant="standard"
                  required
                  label={t("common:inputEmail")}
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
                  // variant="standard"
                  type="phone"
                  label={t("common:inputPhone")}
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
                                <Box
                                  component="img"
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
                  label={t("common:inputSubject")}
                  name="subject"
                  multiline
                  // variant="standard"
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
                  label={t("common:inputMessage")}
                  name="message"
                  multiline
                  rows={4}
                  // variant="standard"
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
                    mx: {
                      xs: "auto !important",
                      md: "unset !important",
                      backgroundColor: "#00adb5",
                      color: "#fff",
                    },
                  }}
                >
                  {t("common:buttonSubmit")}
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
