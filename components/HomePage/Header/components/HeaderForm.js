import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const HeaderForm = () => {
  return (
    <Card
      sx={{
        backgroundColor: "rgba(256, 256, 256, 0.08)",
        boxShadow:
          "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        backdropFilter: "blur(8px)",
        borderRadius: "1rem",
      }}
    >
      <Stack spacing={3} sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ color: "#fff7" }}>
          Online Free Consultation
        </Typography>
        <Box
          component="form"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
            padding: "1rem 0",
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
              marginRight: "1rem",
              color: "#637381",
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
              marginRight: "1rem",
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
              marginRight: "1rem",
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
              "&:hover": {
                background: "#00adb5",
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default HeaderForm;
