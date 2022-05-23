import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const HeaderForm = () => {
  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        padding: "2.5rem",
        borderRadius: "1rem",
      }}
    >
      <Typography variant="h4">Online Free Consultation</Typography>
      <Box
        component="form"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          //   padding: "2rem 0",
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
          label="Phone"
          variant="standard"
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
            background: "#00adb5",
            color: "#fff",
            marginTop: "0.5rem",
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderForm;
