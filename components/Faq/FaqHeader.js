import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material";
// import image from "../../assets/images/AboutHeader.jpg";
// import { useNavigate } from "react-router-dom";
import { RiQuestionnaireLine } from "react-icons/ri";

const Background = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "20.3rem",
  backgroundImage:
    "linear-gradient(rgba(0, 0, 0, 0.5)," +
    "rgba(0, 0, 0, 0.5))," +
    `url("./assets/AboutHeader.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
});
const FaqHeader = () => {
  // const navigate = useNavigate();
  return (
    <Box sx={{ width: "100%" }}>
      <Background>
        <Typography
          variant={"h1"}
          components={"h1"}
          color={"#FFF"}
          sx={{
            display: "flex",
            alignItems: "center",
            letterSpacing: "0.5rem",
            fontWeight: 800,
            fontSize: "4.3rem",
            lineHeight: "7rem",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          <RiQuestionnaireLine /> <i style={{ marginLeft: "10px" }}>FAQ</i>
        </Typography>
        <Typography
          color="#fff"
          sx={{
            fontSize: { xs: "17px", sm: "20px", md: "24px" },
            textAlign: "center",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
          praesentium
        </Typography>
        <Typography
          // onClick={() => navigate("/")}
          variant={"h1"}
          components={"h1"}
          color={"#dedede"}
          sx={{
            fontWeight: 300,
            fontSize: "1.5rem",
            fontFamily: "'Poppins', sans-serif",
            // borderBottom: "1px solid #FFF",
            ":hover": {
              cursor: "pointer",
            },
          }}
        >
          <i>Home</i>
        </Typography>
      </Background>
    </Box>
  );
};

export default FaqHeader;
