import {
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";

import NextLink from "next/link";
import Image from "next/image";

import { BsDot } from "react-icons/bs";

import useTranslation from "next-translate/useTranslation";
import ServicesHero from "./components/ServicesHero";

import NextImage from "../UI/NextImage";

const ServicesPage = ({ services }) => {
  const { t } = useTranslation();

  return (
    <>
      <ServicesHero cover="https://aykutplastic.s3.eu-central-1.amazonaws.com/About_Header_3f13de1023.jpg" />
      <Box
        sx={{
          padding: "2rem 0 6rem 0",
        }}
      >
        <Container
          sx={{
            borderRadius: "1rem",
            marginTop: "-6.5rem",
            padding: "2rem 0.75rem",
            backgroundColor: "#fff",
          }}
        >
          <Grid container spacing={2}>
            {services
              ? services.map((item, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{ padding: "1rem" }}
                  >
                    <NextLink
                      href={`/services/${item.title
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      sx={{
                        color: "#000",
                        textDecoration: "none",
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ cursor: "pointer", marginBottom: "1rem" }}
                      >
                        {item.title}
                      </Typography>
                    </NextLink>
                    <NextImage
                      src={item.thumbnail?.url}
                      alt="service-img"
                      objectFit="cover"
                      height="20rem"
                      imageStyle={{ borderRadius: "1rem" }}
                    />
                    <List sx={{ width: "100%" }}>
                      {item.subservices &&
                        item.subservices.map((service, sIndex) => (
                          <ListItem key={sIndex}>
                            <BsDot />
                            <NextLink
                              href={`/services/${service.title
                                .toLowerCase()
                                .split(" ")
                                .join("-")}`}
                              sx={{
                                color: "#0009",
                                textDecoration: "none",
                                "&:hover": { textDecoration: "underline" },
                              }}
                            >
                              {service.title}
                            </NextLink>
                          </ListItem>
                        ))}
                    </List>
                  </Grid>
                ))
              : null}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ServicesPage;
