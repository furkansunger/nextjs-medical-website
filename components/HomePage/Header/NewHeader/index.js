import Slider from "react-slick";
import { useRef, useEffect, useState } from "react";

import { alpha, useTheme } from "@mui/material/styles";
import { Stack, Typography, Button, Avatar, Box } from "@mui/material";

import CarouselDots from "../../../UI/CarouselDots";

import { BiDollarCircle, BiStar, BiTimeFive } from "react-icons/bi";

import HeaderForm from "../components/HeaderForm";

export default function Header() {
  const [selected, setSelected] = useState(1);

  const [carouselContent, setCarouselContent] = useState();
  const [carouselThumbnail, setCarouselThumbnail] = useState();
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    setCarouselContent(carouselRef1.current || undefined);
    setCarouselThumbnail(carouselRef2.current || undefined);
  }, [selected]);

  const carouselContentSettings = {
    initialSlide: selected,
    dots: true,
    speed: 1440,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setSelected(next),
    ...CarouselDots({
      sx: {
        display: { md: "none" },
        left: 0,
        right: 0,
        zIndex: 9,
        bottom: 64,
        position: "absolute",
      },
    }),
  };

  const carouselThumbnailSettings = {
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    vertical: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    verticalSwiping: true,
    swipeToSlide: true,
    focusOnSelect: true,
    // rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current, next) => setSelected(next),
  };

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      {/* {tours.length && ( */}
      <Slider
        {...carouselContentSettings}
        asNavFor={carouselThumbnail}
        ref={carouselRef1}
      >
        {/* {tours.map((tour, index) => ( */}
        {/* key={tour.id}
            tour={tour}*/}
        <ContentItem isSelected={selected === 0} />
        <ContentItem isSelected={selected === 1} />
        <ContentItem isSelected={selected === 2} />
        <ContentItem isSelected={selected === 3} />
        <ContentItem isSelected={selected === 4} />
        {/* ))} */}
      </Slider>
      {/* )} */}

      <Stack
        spacing={2}
        justifyContent="center"
        sx={{
          top: 0,
          height: 1,
          maxWidth: 220,
          position: "absolute",
          display: { xs: "none", md: "flex" },
          right: { xs: 20, lg: "6%", xl: "10%" },
        }}
      >
        {/* {tours.length && ( */}
        <Slider
          {...carouselThumbnailSettings}
          asNavFor={carouselContent}
          ref={carouselRef2}
        >
          {/* {tours.map((tour, index) => ( */}
          {/* key={tour.id}
                tour={tour} */}
          <ThumbnailItem isSelected={selected === 0} />
          <ThumbnailItem isSelected={selected === 1} />
          <ThumbnailItem isSelected={selected === 2} />
          <ThumbnailItem isSelected={selected === 3} />
          <ThumbnailItem isSelected={selected === 4} />
          {/* ))} */}
        </Slider>
        {/* )} */}
      </Stack>
    </Box>
  );
}

function ContentItem({ tour }) {
  //   const theme = useTheme();
  //   const { slug, location, heroImg, ratings, price, duration } = tour;

  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        position: "relative",
        color: "#fff",
        justifyContent: "center",
      }}
    >
      {/* Content */}
      <Stack
        alignItems="center"
        sx={{
          zIndex: 9,
          py: { xs: 20, md: 0 },
          position: { md: "absolute" },
        }}
      >
        <Typography variant="h2" sx={{ maxWidth: 480 }}>
          Fire and Ice (6days)
        </Typography>
      </Stack>

      {/* Background */}
      <Box
        sx={{
          width: 1,
          height: 1,
          position: {
            xs: "absolute",
            md: "relative",
          },
        }}
      >
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
        <Box
          component="img"
          alt="hero"
          src="https://zone-assets-api.vercel.app/assets/images/travel/travel_hero_1.jpg"
          sx={{
            height: { xs: 1, md: "100vh" },
            width: { xs: 1, md: "100vw" },
          }}
        />
      </Box>
    </Box>
  );
}

function ThumbnailItem({ tour, isSelected }) {
  //   const theme = useTheme();
  //   const { continent, heroImg, location } = tour;

  const bgBlur = {
    backdropFilter: `blur(8px)`,
    WebkitBackdropFilter: `blur(8px)`, // Fix on Mobile
    backgroundColor: alpha("#fff", 0.08),
  };

  const textStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2.5}
      sx={{
        px: 2,
        py: 1.5,
        cursor: "pointer",
        color: "common.white",
        ...(isSelected && {
          borderRadius: 2,
          ...bgBlur,
        }),
      }}
    >
      <Avatar
        src="https://zone-assets-api.vercel.app/assets/images/travel/travel_hero_1.jpg"
        sx={{ width: 48, height: 48 }}
      />
      <Stack spacing={0.5}>
        <Typography variant="h6" line={1} sx={{ ...textStyle }}>
          Aruba
        </Typography>
      </Stack>
    </Stack>
  );
}
