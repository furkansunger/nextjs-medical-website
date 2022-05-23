import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
// import headerBg from "../../../assets/images/aykutgok.jpg";
// import { motion } from "framer-motion";

const Header = () => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },
        height: { sm: "calc(100vh - 0rem)", xs: "calc(100vh - 0rem)" },
        padding: { sm: "4rem", xs: "1rem" },
        background: `linear-gradient(0deg, rgba(56, 83, 153, 0.6), rgba(0, 0, 0, 0.4)), url("./assets/aykutgok.jpg")`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <motion.div
        style={{ height: "100%" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      > */}
      <Container
        sx={{
          height: "100%",
          width: { sm: "40%", xs: "100%" },
          margin: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "start", xs: "center" },
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ color: "#fff", fontSize: { sm: "3rem", xs: "1.75rem" } }}
        >
          Make the most of who you are!
        </Typography>
        <Button
          href="https://wa.me/905551234567"
          sx={{
            background: "#385399",
            color: "#fff",
            marginTop: "1.5rem",
            "&:hover": {
              background: "#385399",
            },
          }}
        >
          Get in touch
        </Button>
      </Container>
      {/* </motion.div> */}
    </Box>
  );
};

export default Header;
