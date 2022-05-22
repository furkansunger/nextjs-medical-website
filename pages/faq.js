import { Box } from "@mui/material";
import React from "react";
import FaqBody from "../components/Faq/FaqBody";
import FaqHeader from "../components/Faq/FaqHeader";
import AppWrapper from "../wrapper/AppWrapper";

const Faq = () => {
  return (
    <Box>
      <FaqHeader />
      <FaqBody />
    </Box>
  );
};

export default AppWrapper(Faq);
