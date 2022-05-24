import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import HeaderContent from "./HeaderContent";
import HeaderForm from "./HeaderForm";

const SliderItem = ({ typography, button, form }) => {
  return (
    <Box
      sx={{
        width: { sm: "100%", xs: "100%" },
        height: { sm: "100vh", xs: "100vh" },
        padding: { sm: "4rem", xs: "1rem" },
        background: `url("./assets/bg.svg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Container
        sx={{
          height: "100%",
          width: { sm: "40%", xs: "100%" },
          margin: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "start", xs: "center" },
          justifyContent: "center",
        }}
      ></Container> */}
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {typography && button ? <HeaderContent /> : null}
          {form && <HeaderForm />}
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "18rem",
              height: "20rem",
              borderRadius: "120px 0 120px 0",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
              backgroundColor: "#fff9",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "3rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "1rem",
                backgroundColor: "#00adb5",
                color: "#fff",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                position: "absolute",
                top: "20px",
                right: "20px",
                "@keyframes pulsate": {
                  0: {
                    transform: "translate(0rem, 0rem)",
                  },
                  "50%": {
                    transform: "translate(-0.5rem, 0.75rem)",
                  },
                  "100%": {
                    transform: "translate(0rem, 0rem)",
                  },
                },
                animation: "pulsate 7s infinite ease",
              }}
            >
              <BiPlusMedical />
            </Box>
            <Box
              component="img"
              style={{
                width: "18rem",
                height: "20rem",
                position: "absolute",
                top: "0px",
                right: "30px",
              }}
              src="./assets/aykutgok-rm.png"
              alt="header-img"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SliderItem;
