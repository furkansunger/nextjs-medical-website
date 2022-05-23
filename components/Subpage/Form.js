import { Box, Button, TextField, Typography } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import React, { useState } from "react";

// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/material.css";

const Form = () => {
  const [error, setError] = useState(false);
  // const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    setError(!error);
  }

  return (
    <Box
      sx={{
        width: "calc(100% - 0rem)",
        height: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },
        padding: { sm: "3rem 1rem", xs: "1rem" },
        position: "relative",
        backgroundColor: "#ddd",
      }}
    >
      <Box
        sx={{
          width: "calc(100% - 0rem)",
          backgroundColor: "#fff",
          borderRadius: "0.75rem",
          padding: "1rem",
          position: { sm: "sticky", xs: "relative" },
          top: { sm: "20vh", xs: "auto" },
          right: { sm: "5vw", xs: "auto" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="medium"
          sx={{ color: "cadetblue" }}
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
              backgroundColor: "cadetblue",
              color: "#fff",
              width: "100%",
              marginTop: "2rem",
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
