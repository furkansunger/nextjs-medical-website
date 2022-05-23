import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const dummyDaya = [
  {
    id: 1,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW4dAMKtU_C_ouclni8A_ZvSHE9Rz0avc0g&usqp=CAU",
  },
  {
    id: 2,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe0yvGJ-imCgCYwcG4ay8zBmE82sZAhQIaA&usqp=CAU",
  },
  {
    id: 3,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://www.buseterim.com.tr/upload/default/2018/4/20/profilestetik680.jpg",
  },
  {
    id: 4,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://reviews.tn/wp-content/uploads/2021/05/photo-de-profil-aesthetic-kpop_30.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEjEZadIAGyb8hruFGxAECVPGwGY9KKamBQ&usqp=CAU",
  },
  {
    id: 6,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW4dAMKtU_C_ouclni8A_ZvSHE9Rz0avc0g&usqp=CAU",
  },
  {
    id: 7,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://alicemalyilmaz.com/uploads/sayfa-resimleri/estetik-burun-ameliyati_29109.jpg",
  },
  {
    id: 8,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image:
      "https://www.drozgurerdem.com/2021/05/yuz-bolgesinde-ayni-surecte-uygulanabilen-estetik-ameliyatlar-nelerdir.jpg",
  },
  {
    id: 9,
    name: "John Doe",
    comment:
      " ''Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quisquam dolor similique obcaecati maxime deleniti corrupti iusto repellat '' ",
    image: "https://www.stsestetik.com/images/img/estetik.png",
  },
];

export default function Testimonals() {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Testimonals Section
      </Typography>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <Swiper
          style={{
            width: "100%",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {dummyDaya.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundColor: "rgb(215, 236, 236)",
                  width: "400px",
                  height: "400px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                >
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                    src={item.image}
                  />
                  <Typography sx={{ marginTop: "20px", textAlign: "center" }}>
                    {item.comment}
                  </Typography>
                  <Typography
                    sx={{ color: "#a08275", marginTop: "20px" }}
                    variant="h6"
                  >
                    {item.name}
                  </Typography>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </>
  );
}
