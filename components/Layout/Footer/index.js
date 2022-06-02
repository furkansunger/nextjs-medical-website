import { Avatar, Box, Divider, Grid, Typography, Link } from "@mui/material";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

import NextLink from "next/link";

import useTranslation from "next-translate/useTranslation";
import { getMultipleData } from "../../../services/fetchers/publicData";

const Footer = ({ services }) => {
  console.log(services)
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderTop: "8px solid cadetblue",
          background: "rgba(0, 0, 0, 0.7)",
          margin: "0!important",
          color: "white",
          height: "auto",
        }}
      >
        <Grid
          sx={{
            padding: { sm: "4rem", xs: "1rem" },
            marginTop: { xs: "30px", md: "0px" },
          }}
          container
          spacing={4}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ textAlign: { xs: "start", sm: "start" } }}
              fontWeight={700}
              variant="h5"
            >
              {t("common:textContact")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { sm: "flex-start", xs: "flex-start" },
                marginTop: "15px",
              }}
            >
              <Avatar sx={{ color: "#00ADB5" }}>
                <AiOutlinePhone />
              </Avatar>
              <Typography marginLeft="10px">
                {t("common:inputPhone")}: <span> +90532 419 8868</span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { sm: "flex-start", xs: "flex-start" },
                marginTop: "15px",
              }}
            >
              <Avatar sx={{ color: "#00ADB5" }}>
                <MdOutlineMail />
              </Avatar>
              <Typography marginLeft="10px">
                {t("common:inputEmail")}: <span> info@aykutgok.com</span>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { sm: "flex-start", xs: "flex-start" },
                marginTop: "15px",
              }}
            >
              <Avatar sx={{ color: "#00ADB5" }}>
                <AiOutlinePhone />
              </Avatar>
              <Typography marginLeft="10px">
                Whatsapp: <span>+90532 419 8868</span>{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { sm: "flex-start", xs: "flex-start" },
                marginTop: "15px",
              }}
            >
              <Avatar sx={{ color: "#00ADB5" }}>
                <FaCalendarAlt />
              </Avatar>
              <Typography marginLeft="10px">
                {t("common:textFooterWorkDays")}:{" "}
                <span> 10:00AM - 08:00PM</span>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ textAlign: { xs: "start", sm: "start" } }}
              fontWeight={700}
              variant="h5"
            >
              {t("common:textFooterInfo")}
            </Typography>
            <Box sx={{ textAlign: { xs: "start", sm: "start" } }}>
              <NextLink style={{ textDecoration: "none" }} href="/">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  {t("common:textHome")}
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/about">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  {t("common:textAbout")}
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/services">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  {t("common:textServices")}
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/portfolio">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  {t("common:textPortfolio")}
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/form">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  {t("common:textMultiForm")}
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/faq">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  {t("common:textFAQ")}
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/blog">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  {t("common:textBlog")}
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/contact">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  {t("common:textContact")}
                </Typography>
              </NextLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ textAlign: { xs: "start", sm: "start" } }}
              fontWeight={700}
              variant="h5"
            >
              {t("common:textFooterProcedures")}
            </Typography>
            <Box sx={{ textAlign: { xs: "start", sm: "start" } }}>
              {services &&
                services.map((item, index) => (
                  <NextLink
                    key={index}
                    style={{ textDecoration: "none" }}
                    href={`/services/${item.title
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    <Typography
                      sx={{
                        marginTop: "15px",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </NextLink>
                ))}
              {/* <NextLink style={{ textDecoration: "none" }} href="/services">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  Plastic Surgery
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/services">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  Hair Transplant
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/services">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  Facial Aesthetic
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/services">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  Dental Care
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/services">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  Botox
                </Typography>
              </NextLink>
              <NextLink style={{ textDecoration: "none" }} href="/services">
                <Typography
                  sx={{ marginTop: "15px", color: "#fff", cursor: "pointer" }}
                >
                  Breast Augmentation
                </Typography>
              </NextLink> */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ textAlign: { xs: "start", sm: "start" } }}
              fontWeight={700}
              variant="h5"
            >
              {t("common:textSocialMedia")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "flex-start ", sm: "start" },
                // marginLeft: { xs: "30px", sm: "0px" },
              }}
            >
              <Link
                style={{ textDecoration: "none" }}
                href="https://www.facebook.com/draykutgok"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "15px",
                    textDecoration: "none",
                  }}
                >
                  <FaFacebookF />
                  <Typography marginLeft="15px" color="#fff">
                    Facebook
                  </Typography>
                </Box>
              </Link>

              <Link
                style={{ textDecoration: "none" }}
                href="https://twitter.com/mdaykutgok"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <FaTwitter />
                  <Typography marginLeft="15px" color="#fff">
                    Twitter
                  </Typography>
                </Box>
              </Link>

              <Link
                style={{ textDecoration: "none" }}
                href="https://instagram.com/draykutgok"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <FaInstagram />
                  <Typography marginLeft="15px" color="#fff">
                    Instagram
                  </Typography>
                </Box>
              </Link>

              <Link
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/aykutgok/"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <FaLinkedinIn />
                  <Typography marginLeft="15px" color="#fff">
                    Linkedin
                  </Typography>
                </Box>
              </Link>

              <Link
                style={{ textDecoration: "none" }}
                href="https://youtube.com/c/wellesclinic"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <FaYoutube />
                  <Typography marginLeft="15px" color="#fff">
                    Youtube
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Divider
          sx={{ backgroundColor: "white", width: "100% ", marginTop: "25px" }}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ padding: "2rem 0" }}
        >
          <Typography color="white">Copyright © 2022 Aykut Gok</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

export const getStaticProps = async (ctx) => {
  const services = await getMultipleData("services", "", "populate=*");

  return {
    props: {
      services,
    },
    revalidate: 1,
  };
};