import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW4dAMKtU_C_ouclni8A_ZvSHE9Rz0avc0g&usqp=CAU",
    jobs: "Founder-CEO",
  },
  {
    id: 2,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe0yvGJ-imCgCYwcG4ay8zBmE82sZAhQIaA&usqp=CAU",
    jobs: "Founder-CEO",
  },
  {
    id: 3,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://www.buseterim.com.tr/upload/default/2018/4/20/profilestetik680.jpg",
    jobs: "Founder-CEO",
  },
  {
    id: 4,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://reviews.tn/wp-content/uploads/2021/05/photo-de-profil-aesthetic-kpop_30.jpg",
    jobs: "Founder-CEO",
  },
  {
    id: 5,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEjEZadIAGyb8hruFGxAECVPGwGY9KKamBQ&usqp=CAU",
    jobs: "Founder-CEO",
  },
  {
    id: 6,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW4dAMKtU_C_ouclni8A_ZvSHE9Rz0avc0g&usqp=CAU",
    jobs: "Founder-CEO",
  },
  {
    id: 7,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://alicemalyilmaz.com/uploads/sayfa-resimleri/estetik-burun-ameliyati_29109.jpg",
    jobs: "Founder-CEO",
  },
  {
    id: 8,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://www.drozgurerdem.com/2021/05/yuz-bolgesinde-ayni-surecte-uygulanabilen-estetik-ameliyatlar-nelerdir.jpg",
    jobs: "Founder-CEO",
  },
  {
    id: 9,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image: "https://www.stsestetik.com/images/img/estetik.png",
    jobs: "Founder-CEO",
  },
];

const Testimonals = () => {
  return (
    <Box>
      <Typography
        sx={{ opacity: "50%" }}
        paddingTop="50px"
        textAlign="center"
        variant="h6"
      >
        TESTIMONIALS
      </Typography>
      <Typography fontWeight={700} textAlign="center" variant="h3">
        Who Love Our Work
      </Typography>
      <Swiper
        style={{ width: "90%", height: "100%" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dummyData.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{ textAlign: "center", padding: "30px 70px 50px 70px" }}
            >
              <Grid
                sx={{ padding: { xs: "0px", md: "70px 120px 70px 120px" } }}
                container
              >
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    fontSize: { xs: "16px", sm: "19px", md: "24px" },
                    textAlign: { xs: "center", md: "start" },
                  }}
                  item
                  xs={12}
                  md={8}
                >
                  {item.comment}
                </Grid>
                <Grid
                  sx={{
                    marginTop: { xs: "25px", md: "0px" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  item
                  xs={12}
                  md={4}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={item.image}
                    sx={{ width: 106, height: 106 }}
                  />
                  <Typography fontSize="25px">{item.name}</Typography>
                  <Typography fontSize="18px">{item.jobs}</Typography>
                </Grid>
              </Grid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
export default Testimonals;
