import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
// import headerBg from "../../../assets/images/aykutgok.jpg";
// import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import SliderItem from "./components/SliderItem";

const Header = () => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },
        height: { sm: "calc(100vh - 0rem)", xs: "calc(100vh - 0rem)" },
      }}
    >
      <Swiper
        direction={"vertical"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{
          width: "100%",
        }}
      >
        <SwiperSlide>
          <SliderItem form={true} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem button={true} typography={true} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Header;
