import { Grid } from "@mui/material";
import React from "react";
import { Detail, Form, Header } from "../components/Subpage";
import MainLayout from "../components/Layout"

const Subpage = () => {
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Detail />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Form />
        </Grid>
      </Grid>
    </>
  );
};

Subpage.Layout = MainLayout;

export default Subpage;
