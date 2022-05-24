import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const HeaderContent = () => {
  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        margin: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff7",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          padding: "2.5rem",
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "start", xs: "center" },
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: { sm: "3rem", xs: "1.75rem" },
            textAlign: "left",
          }}
        >
          Make the most of who you are!
        </Typography>
        <Button
          href="https://wa.me/905551234567"
          sx={{
            background: "#00adb5",
            color: "#fff",
            marginTop: "1.5rem",
            "&:hover": {
              background: "#00adb5",
            },
          }}
        >
          Get in touch
        </Button>
      </Box>
    </Container>
  );
};

export default HeaderContent;
