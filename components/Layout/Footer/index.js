import {
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

// import Link from 'next/link'

const Footer = () => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },
        padding: { sm: "4rem", xs: "1rem" },
        borderTop: "8px solid cadetblue",
        background: "rgba(0, 0, 0, 0.7)",
        margin: "0!important"
      }}
    >
      <Grid container>
        <Grid item md={3} sm={6} xs={12}>
          <img
            style={{ width: "100%" }}
            src="https://aykutgok.com/wp-content/uploads/2021/06/Add-a-heading.svg"
            alt="logo"
          />
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{ padding: { sm: "0 1rem", xs: "1rem" } }}
        >
          <Typography variant="h5" sx={{ color: "#ccc" }}>
            Quick Links
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItem: "start",
              justifyContent: "start",
              marginTop: "0.5rem",
            }}
          >
            <Link
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                "&:hover": { marginLeft: "0.5rem" },
              }}
              href="/"
            >
              Home
            </Link>
            <Link
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                "&:hover": { marginLeft: "0.5rem" },
              }}
              href="/"
            >
              Home
            </Link>
            <Link
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                "&:hover": { marginLeft: "0.5rem" },
              }}
              href="/"
            >
              Home
            </Link>
            <Link
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                "&:hover": { marginLeft: "0.5rem" },
              }}
              href="/"
            >
              Home
            </Link>
            <Link
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "1.2rem",
                "&:hover": { marginLeft: "0.5rem" },
              }}
              href="/"
            >
              Home
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{ padding: { sm: "0 1rem", xs: "1rem" } }}
        >
          <Typography variant="h5" sx={{ color: "#ccc" }}>
            Infos
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginTop: "0.5rem",
            }}
          >
            <Link
              sx={{ color: "#fff", textDecoration: "none" }}
              href="tel:+90 532 419 88 68"
            >
              +90 532 419 88 68
            </Link>
            <Link
              sx={{ color: "#fff", textDecoration: "none" }}
              href="mailto:info@aykutgok.com"
            >
              info@aykutgok.com
            </Link>
            <Box>
              <Typography sx={{ color: "#fff" }} variant="body1">
                Mon-Sat 10:00 - 19:00
              </Typography>
              <Typography sx={{ color: "#fff" }} variant="body1">
                Sunday: Closed
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          sx={{ padding: { sm: "0 1rem", xs: "1rem" } }}
        >
          <Typography variant="h5" sx={{ color: "#ccc" }}>
            Social Media
          </Typography>
          <Divider />
          <Box sx={{ marginTop: "0.5rem" }}>
            <Link href="https://www.facebook.com/draykutgok" target="_blank">
              <IconButton sx={{ color: "#fff" }}>
                <FaFacebookF />
              </IconButton>
            </Link>
            <Link href="https://twitter.com/mdaykutgok" target="_blank">
              <IconButton sx={{ color: "#fff" }}>
                <FaTwitter />
              </IconButton>
            </Link>
            <Link href="https://instagram.com/draykutgok" target="_blank">
              <IconButton sx={{ color: "#fff" }}>
                <FaInstagram />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/aykutgok/" target="_blank">
              <IconButton sx={{ color: "#fff" }}>
                <FaLinkedinIn />
              </IconButton>
            </Link>
            <Link href="https://youtube.com/c/wellesclinic" target="_blank">
              <IconButton sx={{ color: "#fff" }}>
                <FaYoutube />
              </IconButton>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
