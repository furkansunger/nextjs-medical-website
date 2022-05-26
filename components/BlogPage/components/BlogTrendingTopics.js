import React from "react";
import { useRef } from "react";

import { alpha } from "@mui/material/styles";
import { Typography, Stack, Container, Box } from "@mui/material";

import NextLink from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const CATEGORIES = [
  "Marketing",
  "Community",
  "Tutorials",
  "Business",
  "Management",
  "Sports",
  "Travel",
  "Design",
];

export const TOPICS = [
  {
    id: "1",
    cover:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_5.jpg",
    totalPost: "12",
    category: CATEGORIES[0],
  },
  {
    id: "2",
    cover:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_6.jpg",
    totalPost: "9",
    category: CATEGORIES[1],
  },
  {
    id: "3",
    cover:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_7.jpg",
    totalPost: "7",
    category: CATEGORIES[2],
  },
  {
    id: "4",
    cover:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_8.jpg",
    totalPost: "5",
    category: CATEGORIES[3],
  },
  {
    id: "5",
    cover:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_9.jpg",
    totalPost: "8",
    category: CATEGORIES[4],
  },
  {
    id: "6",
    cover:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_10.jpg",
    totalPost: "5",
    category: CATEGORIES[5],
  },
  {
    id: "7",
    cover:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_11.jpg",
    totalPost: "2",
    category: CATEGORIES[6],
  },
  {
    id: "8",
    cover:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_12.jpg",
    totalPost: "4",
    category: CATEGORIES[7],
  },
];

export default function BlogTravelTrendingTopics() {
  const carouselRef = useRef(null);

  return (
    <Box sx={{ width: "100%" }}>
      <Container sx={{ width: "100%" }}>
        <Stack
          direction="row"
          justifyContent={{ md: "space-between" }}
          sx={{ mb: 6 }}
        >
          <Typography variant="h3">Trending Topics</Typography>
        </Stack>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          style={{ padding: "2rem 0" }}
        >
          {TOPICS.map((topic) => (
            <SwiperSlide key={topic.id}>
              <TopicItem topic={topic} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}

function TopicItem({ topic }) {
  const { totalPost, cover, category } = topic;

  return (
    <NextLink href="#" passHref>
      <Box sx={{ px: 1.5, cursor: "pointer" }}>
        <Box sx={{ borderRadius: 2, overflow: "hidden", position: "relative" }}>
          <Stack
            spacing={0.5}
            sx={{
              py: 3,
              width: 1,
              zIndex: 9,
              bottom: 0,
              textAlign: "center",
              position: "absolute",
              color: "#fff",
            }}
          >
            <Box>
              <Typography variant="h5">{category}</Typography>
            </Box>

            <Typography variant="body2" sx={{ opacity: 0.72 }}>
              {totalPost} posts
            </Typography>
          </Stack>

          <Box
            sx={{
              top: 0,
              left: 0,
              zIndex: 8,
              width: "100%",
              height: "100%",
              position: "absolute",
              background: `linear-gradient(to bottom, ${alpha(
                "#000000",
                0
              )} 0%, #000000 75%)`,
            }}
          ></Box>

          <Box>
            <Box component="img" alt={category} src={cover} />
          </Box>
        </Box>
      </Box>
    </NextLink>
  );
}
