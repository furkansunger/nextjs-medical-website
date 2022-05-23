import { Box } from "@mui/material";
import React from "react";
import FaqBody from "../components/Faq/FaqBody";
import FaqHeader from "../components/Faq/FaqHeader";
import MainLayout from "../components/Layout"

const Faq = () => {
  return (
    <Box>
      <FaqHeader />
      <FaqBody />
    </Box>
  );
};

Faq.Layout = MainLayout;

export default Faq;
