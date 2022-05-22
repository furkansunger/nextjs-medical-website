import { Grid } from "@mui/material";
import React from "react";
import { Detail, Form, Header } from "../components/Subpage";
import AppWrapper from "../wrapper/AppWrapper";

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

export default AppWrapper(Subpage);
