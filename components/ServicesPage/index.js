import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Divider
} from "@mui/material";
import React from "react";

import { BsDot } from "react-icons/bs";

const services = [
  {
    id: "1",
    service: "Body Contouring Surgery",
    serviceImg: "./assets/blue_480x480.png",
    subServices: [
      "Momy Makeover",
      "Liposuction",
      "Butt Lift",
      "Arm & Leg Lift",
      "Abdominoplasty - Tummy Tuck",
      "Genital Aesthetics",
      "Vaginoplasty",
      "Fat Injection",
    ],
  },
  {
    id: "2",
    service: "Facial Aesthetic",
    serviceImg: "./assets/blue_480x480.png",
    subServices: [
      "Rhinoplasty",
      "Lip Surgery",
      "Ear Surgery",
      "Forehead & Eyebrow Lift",
      "Eyelid Surgery (Blepharoplasty)",
      "Face Lift",
      "Neck Lift",
    ],
  },
  {
    id: "3",
    service: "Breast Augmentation",
    serviceImg: "./assets/blue_480x480.png",
    subServices: [
      "Breasts Lift",
      "Breast Asymmetry Correction",
      "Breast Reconstruction",
      "Male Breast Reduction (Gynecomastia)",
      "Breast Reduction",
      "Breast Augmentation",
    ],
  },
  {
    id: "4",
    service: "Hair Restoration",
    serviceImg: "./assets/blue_480x480.png",
    subServices: [
      "Fue Hair Transplant",
      "Hair Transplant",
      "Unshaven Hair Transplant",
      "Beard, Mustache Transplant",
      "Laser Hair Treatment",
      "DHI Hair Transplant",
      "Hair Loss Treatment",
      "Eyebrow Transplant",
    ],
  },
  {
    id: "5",
    service: "Nonsurgical",
    serviceImg: "./assets/blue_480x480.png",
    subServices: [
      "Botox",
      "PRP And Mesotherapy",
      "Non-Surgical Face Lift",
      "Filler Injections",
      "Facial Rejuvenation",
    ],
  },
  {
    id: "6",
    service: "Dental",
    serviceImg: "./assets/blue_480x480.png",
    subServices: [],
  },
];

const ServicesPage = () => {
  return (
    <Box
      sx={{
        padding: "10rem 0 6rem 0",
      }}
    >
      <Container>
        <Typography variant="h3">Services</Typography>
        <Divider sx={{margin: "0.5rem 0 2rem 0"}} />
        <Grid container spacing={2}>
          {services?.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ padding: "1rem" }}
            >
              <Link
                href={`/services/servicedetail`}
                sx={{
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                <Typography variant="h5">{item.service}</Typography>
              </Link>
              <Box
                component="img"
                sx={{
                  width: "100%",
                  borderRadius: "1rem",
                  border: "1px solid #0003",
                  margin: "1rem 0",
                }}
                src={item.serviceImg}
                alt="service-img"
              />
              <List sx={{ width: "100%" }}>
                {item.subServices &&
                  item.subServices.map((service, sIndex) => (
                    <ListItem key={sIndex}>
                      <BsDot />
                      <Link
                        href={`/services/servicedetail`}
                        sx={{
                          color: "#0009",
                          textDecoration: "none",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        {service}
                      </Link>
                    </ListItem>
                  ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;
