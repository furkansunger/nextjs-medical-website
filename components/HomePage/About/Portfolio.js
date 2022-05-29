import { Box, Button, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

import useTranslation from "next-translate/useTranslation";

// import Categories from './Categories';

const Categories = [
  {
    img: "/assets/blue_480x480.png",
    title: "Body Contouring Surgery",
    category: "Body Contouring Surgery",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Facial Aesthetic",
    category: "Facial Aesthetic",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Facial Aesthetic",
    category: "Facial Aesthetic",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Body Contouring Surgery",
    category: "Body Contouring Surgery",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Facial Aesthetic",
    category: "Facial Aesthetic",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Breast Augmentation",
    category: "Breast Augmentation",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Hair Restoration",
    category: "Hair Restoration",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Breast Augmentation",
    category: "Breast Augmentation",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Breast Augmentation",
    category: "Breast Augmentation",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Body Contouring Surgery",
    category: "Body Contouring Surgery",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Dental",
    category: "Dental",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Hair Restoration",
    category: "Hair Restoration",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Nonsurgical",
    category: "Nonsurgical",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Dental",
    category: "Dental",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Nonsurgical",
    category: "Nonsurgical",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Hair Restoration",
    category: "Hair Restoration",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Dental",
    category: "Dental",
  },
  {
    img: "/assets/blue_480x480.png",
    title: "Nonsurgical",
    category: "Nonsurgical",
  },
];

// export default Categories;

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const Portfolio = () => {
  const { t } = useTranslation();

  const [data, setData] = useState(Categories);

  const filterResult = (catItem) => {
    const result = Categories.filter((item) => item.category === catItem);
    setData(result);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event = React.SyntheticEvent, newValue = number) => {
    setValue(newValue);
  };

  const [visible, setVisible] = useState(10);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  const showLessItems = () => {
    if (visible > 10) {
      setVisible((prevValue) => prevValue - 10);
    }
  };
  return (
    <>
      <Typography
        marginTop="100px"
        textAlign="center"
        fontWeight={700}
        variant="h3"
      >
        {t("common:textPortfolio")}
      </Typography>

      <Box sx={{ borderColor: "divider", marginTop: "30px" }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          value={value}
          onChange={handleChange}
        >
          <Tab onClick={() => setData(Categories)} label="All" />
          <Tab
            onClick={() => filterResult("Breast Augmentation")}
            label="Breast Augmentation"
          />
          <Tab
            onClick={() => filterResult("Facial Aesthetic")}
            label="Facial Aesthetic"
          />
          <Tab
            onClick={() => filterResult("Hair Restoration")}
            label="Hair Restoration"
          />
          <Tab
            onClick={() => filterResult("Body Contouring Surgery")}
            label="Body Contouring Surgery"
          />
          <Tab
            onClick={() => filterResult("Nonsurgical")}
            label="Nonsurgical"
          />
          <Tab onClick={() => filterResult("Dental")} label="Dental" />
        </Tabs>
      </Box>

      <Grid container>
        {data.slice(0, visible).map((item, index) => (
          <Grid key={index} padding={5} item xs={12} sm={6} md={4}>
            <Box
              component="img"
              width="100%"
              height="100%"
              src={item.img}
              alt={item.title}
              ratio="1/1"
              style={{ borderRadius: "15px", filter: "grayScale(50%)" }}
            />

            <Stack spacing={1} sx={{ p: 2.5 }}>
              <Typography variant="body1" sx={{ color: "#0009" }}>
                {item.category}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        <Button
          sx={{ color: "#fff" }}
          onClick={showLessItems}
          variant="contained"
        >
          {" "}
          <AiOutlineArrowUp />
          {t("common:buttonLess")}
        </Button>
        <Button
          sx={{ marginLeft: "20px", color: "#fff" }}
          onClick={showMoreItems}
          variant="contained"
        >
          {" "}
          <AiOutlineArrowDown />
          {t("common:buttonMore")}
        </Button>
      </Box>
    </>
  );
};

export default Portfolio;
