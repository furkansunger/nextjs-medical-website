import { Box } from "@mui/material";
import React from "react";
import ContactForm from "../components/ContactPage/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo";
import MainLayout from "../components/Layout"

const Contact = () => {
  return (
    <Box
      sx={{
        marginTop: "6rem",
        padding: "3rem 0",
        backgroundColor: "#F9FAFB",
      }}
    >
      <ContactInfo />
      <ContactForm />
    </Box>
  );
};

Contact.Layout = MainLayout;

export default Contact;
