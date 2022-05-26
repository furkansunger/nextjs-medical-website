import { Card, Stack, Box, Button, TextField, Typography } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import React, { useState } from "react";

const ServiceForm = () => {
  const [error, setError] = useState(false);
  // const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    setError(!error);
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
          onSubmit={handleSubmit}
        >
          <TextField
            error={error ? true : false}
            // id="standard-error-helper-text"
            label={`${error ? "Error" : "Full Name"}`}
            helperText={error ? "Incorrect entry." : null}
            variant="standard"
            sx={{
              width: "100%",
              marginBottom: "0.75rem",
            }}
          />
          <TextField
            error={error ? true : false}
            // id="standard-error-helper-text"
            label={`${error ? "Error" : "Email"}`}
            helperText={error ? "Incorrect entry." : null}
            variant="standard"
            sx={{
              width: "100%",
              marginBottom: "0.75rem",
            }}
          />
          <TextField
            error={error ? true : false}
            // id="standard-error-helper-text"
            label={`${error ? "Error" : "Phone Number"}`}
            helperText={error ? "Incorrect entry." : null}
            variant="standard"
            sx={{
              width: "100%",
              marginBottom: "0.75rem",
            }}
          />
          {/* <PhoneInput
            country={'tr'}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            enableSearch
          /> */}
          <TextField
            // error={error ? true : false}
            // id="standard-error-helper-text"
            label="Your Message"
            // helperText={error ? "Incorrect entry." : null}
            variant="standard"
            sx={{
              width: "100%",
              marginBottom: "0.75rem",
            }}
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            endIcon={<IoMdSend />}
            sx={{
              backgroundColor: "#005c71",
              color: "#fff",
              width: "100%",
              marginTop: "2rem",
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
