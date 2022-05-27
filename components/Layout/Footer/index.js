import {
  Avatar,
  Box,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
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

// import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <Link href="/contact">
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", position: "relative", top: "30px" }}>
          <Typography sx={{ textAlign: "center", borderRadius: "35px", padding: "10px 25px 10px 25px", backgroundColor: "#00ADB5", color: "#fff" }} variant="h4">Contact Us</Typography>
        </Box>
      </Link>

      <Box
        sx={{
          width: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },

          borderTop: "8px solid cadetblue",
          background: "rgba(0, 0, 0, 0.7)",
          margin: "0!important",
          color: "white",
          height: "auto",

        }}
      >
        <Grid sx={{ padding: { sm: "4rem", xs: "1rem" }, marginTop: { xs: "30px", md: "0px" } }} container>
          <Grid item xs={7} md={3}>
            <Typography sx={{ textAlign: { xs: "center", sm: "start" } }} fontWeight={700} variant="h5">Contact</Typography>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
              <Avatar sx={{ color: "#00ADB5" }} ><AiOutlinePhone /></Avatar>
              <Typography marginLeft="10px" >Phone: <span> +90532 419 8868</span></Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
              <Avatar sx={{ color: "#00ADB5" }}><MdOutlineMail /></Avatar>
              <Typography marginLeft="10px">Email: <span> info@aykutgok.com</span></Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
              <Avatar sx={{ color: "#00ADB5" }}><AiOutlinePhone /></Avatar>
              <Typography marginLeft="10px">Whatsapp: <span>+90532 419 8868</span> </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
              <Avatar sx={{ color: "#00ADB5" }}><FaCalendarAlt /></Avatar>
              <Typography marginLeft="10px">Mon-Sat: <span> 10:00AM - 08:00PM</span></Typography>
            </Box>
          </Grid>
          <Grid item xs={5} md={3}>
            <Typography sx={{ textAlign: { xs: "center", sm: "start" } }} fontWeight={700} variant="h5">General Information</Typography>
            <Box sx={{ textAlign: { xs: "center", sm: "start" } }}>
              <Link style={{ textDecoration: "none" }} href="/about">
                <Typography sx={{ marginTop: "15px", color: "#fff" }}>About Me</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }} href="/">
                <Typography sx={{ marginTop: "15px", color: "#fff" }}>Home</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }} href="/about">
                <Typography sx={{ marginTop: "15px", color: "#fff" }}>FAQ</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }} href="#">
                <Typography sx={{ marginTop: "15px", color: "#fff" }}>Contact Us</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }} href="#">
                <Typography sx={{ marginTop: "15px", color: "#fff" }}>Blog</Typography>
              </Link>
              <Link style={{ textDecoration: "none" }} href="#">
                <Typography sx={{ marginTop: "15px", color: "#fff" }}>Portfolio</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={7} md={3}>
            <Typography sx={{ textAlign: { xs: "center", sm: "start" } }} fontWeight={700} variant="h5">Procedures</Typography>
            <Box sx={{ textAlign: { xs: "center", sm: "start" } }}>
              <Typography sx={{ marginTop: "15px", color: "#fff" }}>Plastic Surgery</Typography>
              <Typography sx={{ marginTop: "15px", color: "#fff" }}>Hair Transplant</Typography>
              <Typography sx={{ marginTop: "15px", color: "#fff" }}>Facial Aesthetic</Typography>
              <Typography sx={{ marginTop: "15px", color: "#fff" }}>Dental Care</Typography>
              <Typography sx={{ marginTop: "15px", color: "#fff" }}>Botox</Typography>
              <Typography sx={{ marginTop: "15px", color: "#fff" }}>Breast Augmentation
              </Typography>

            </Box>
          </Grid>
          <Grid item xs={5} md={3}>
            <Typography sx={{ textAlign: { xs: "center", sm: "start" } }} fontWeight={700} variant="h5">Social Media</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", marginLeft: { xs: "30px", sm: "0px" } }}>
              <Link style={{ textDecoration: "none" }} href={"https://facebook.com"}>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px", textDecoration: "none" }}>
                  <FaFacebookF />
                  <Typography marginLeft="15px" color="#fff">Facebook</Typography>
                </Box>
              </Link>

              <Link style={{ textDecoration: "none" }} href={"https://twitter.com"}>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                  <FaTwitter />
                  <Typography marginLeft="15px" color="#fff">Twitter</Typography>
                </Box>
              </Link>

              <Link style={{ textDecoration: "none" }} href={"https://instagram.com"}>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                  <FaInstagram />
                  <Typography marginLeft="15px" color="#fff">Instagram</Typography>
                </Box>
              </Link>

              <Link style={{ textDecoration: "none" }} href={"https://linkedin.com"}>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                  <FaLinkedinIn />
                  <Typography marginLeft="15px" color="#fff">Linkedin</Typography>
                </Box>
              </Link>

              <Link style={{ textDecoration: "none" }} href={"https://youtube.com"}>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
                  <FaYoutube />
                  <Typography marginLeft="15px" color="#fff">Youtube</Typography>
                </Box>
              </Link>
            </Box>


          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "white", width: "100% ", marginTop: "25px" }} />
        <Box
          // my={3}
          marginTop="10px"

          rowGap={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
        // sx={{ background: "rgba(0, 0, 0, 0.7)" }}
        >
          <Typography color="white">
            2022 aykutgok inc. Terms-Privacy &reg;
          </Typography>
          <Typography paddingBottom="10px" color="white">Made with ❤️ by admarket team</Typography>
        </Box>

      </Box>
    </>






  );
};

export default Footer;
