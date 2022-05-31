import Slider from "react-slick";
import { useRef, useEffect, useState } from "react";

import { alpha, useTheme } from "@mui/material/styles";
import { Stack, Typography, Button, Avatar, Box } from "@mui/material";

import CarouselDots from "../../UI/CarouselDots";

const data = [
  {
    id: "1",
    title: "Lorem ipsum dolor.",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
    thumbTitle: "Lorem",
  },
  {
    id: "2",
    title: "Commodo quis imperdiet massa tincidunt",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853",
    thumbTitle: "Ipsum",
  },
  {
    id: "3",
    title: "Varius morbi enim nunc",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    thumbTitle: "Dolor",
  },
  {
    id: "4",
    title: "Eu lobortis elementum.",
    img: "https://images.unsplash.com/photo-1570057811613-5ac715e0afec?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873",
    thumbTitle: "Amet",
  },
];

export default function Header({hero}) {
  // const {image, title, step_description} = hero;

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
      {data.length && (
        <Slider
          {...carouselContentSettings}
          asNavFor={carouselThumbnail}
          ref={carouselRef1}
        >
          {data.map((item, index) => (
            <ContentItem
              key={item.id}
              content={item}
              isSelected={selected === index}
            />
          ))}
        </Slider>
      )}

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
        {data.length && (
          <Slider
            {...carouselThumbnailSettings}
            asNavFor={carouselContent}
            ref={carouselRef2}
          >
            {data.map((item, index) => (
              <ThumbnailItem
                key={item.id}
                thumb={item}
                isSelected={selected === index}
              />
            ))}
          </Slider>
        )}
      </Stack>
    </Box>
  );
}

function ContentItem({ content }) {
  //   const theme = useTheme();
  const { id, title, img, thumbTitle } = content;

  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        position: "relative",
        color: "#fff",
        justifyContent: "center",
        height: "100vh"
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
        <Typography variant="h2" sx={{ maxWidth: 480, fontSize: {sm: "3.75rem", xs: "2.5rem"} }}>
          {title}
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
          alt={thumbTitle}
          src={img}
          sx={{
            height: "100vh",
            width: "100vw",
          }}
        />
      </Box>
    </Box>
  );
}

function ThumbnailItem({ thumb, isSelected }) {
  //   const theme = useTheme();
  const { thumbTitle, img } = thumb;

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
      <Avatar src={img} sx={{ width: 48, height: 48 }} />
      <Stack spacing={0.5}>
        <Typography variant="h6" line={1} sx={{ ...textStyle }}>
          {thumbTitle}
        </Typography>
      </Stack>
    </Stack>
  );
}
