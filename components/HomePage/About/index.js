import { Box, Grid, IconButton, Link, Typography, Button } from "@mui/material";
import React from "react";
// import aboutImg from "../../../assets/images/header-bg.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaPlus,
} from "react-icons/fa";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },
        padding: { sm: "4rem", xs: "1rem" },
      }}
    >
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      > */}
      <Grid
        container
        // spacing={3}
        sx={{ flexDirection: { sm: "row", xs: "column-reverse" } }}
      >
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#385399",
              fontSize: { xl: "2rem", xs: "1rem" },
              backgroundColor: "#ccc",
              padding: "0.25rem",
              borderRadius: "0.25rem",
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              margin: "0.5rem 0",
              fontSize: { xl: "2.75rem", sm: "1.75rem", xs: "1.25rem" },
            }}
          >
            Dr. Aykut Gok
          </Typography>
          <Typography
            sx={{ fontSize: { xl: "2rem", sm: "1rem", xs: "0.75rem" } }}
          >
            Our major areas of specialization include plastic surgery, hair
            transplant, dental care, nonsurgical, facial, breast augmentation,
            rhinoplasty. Our major areas of specialization include plastic
            surgery, hair transplant, dental care, nonsurgical, facial, breast
            augmentation, rhinoplasty.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#385399",
                marginTop: "1rem",
                "&:hover": { backgroundColor: "#385399", color: "#fff" },
                borderRadius: "50%",
                width: "6rem",
                height: "6rem",
                textAlign: "center",
                marginRight: "1rem",
              }}
              variant="filled"
              href="/"
            >
              Read More
            </Button>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#385399",
                marginTop: "1rem",
                "&:hover": { backgroundColor: "#385399", color: "#fff" },
                borderRadius: "50%",
                width: "6rem",
                height: "6rem",
                textAlign: "center",
                marginRight: "1rem",
              }}
              variant="filled"
              href="/"
            >
              My Services
            </Button>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#385399",
                marginTop: "1rem",
                "&:hover": { backgroundColor: "#385399", color: "#fff" },
                borderRadius: "50%",
                width: "6rem",
                height: "6rem",
                textAlign: "center",
                marginRight: "1rem",
              }}
              variant="filled"
              href="/"
            >
              My Blog
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "60%",
              borderRadius: "50%",
              boxShadow: "0px 3px 12px 0px rgba(0,0,0,0.6)",
            }}
            src="./assets/header-bg.jpg"
            alt="about-img"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          marginTop: "2rem",
          backgroundColor: "#ed1b24",
          width: "calc(100% - 0rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "2rem",
          borderRadius: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: { sm: "0", xs: "1rem" },
          }}
        >
          <IconButton
            sx={{
              color: "#fff",
              backgroundColor: "#23408e",
              "&:hover": { backgroundColor: "#23408e" },
            }}
          >
            <FaPhoneAlt />
          </IconButton>
          <Box sx={{ marginLeft: "0.5rem" }}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
              Call
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(256, 256, 256, 0.8)" }}
            >
              +90 532 419 8868
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: { sm: "0", xs: "1rem" },
          }}
        >
          <IconButton
            sx={{
              color: "#fff",
              backgroundColor: "#23408e",
              "&:hover": { backgroundColor: "#23408e" },
            }}
          >
            <FaEnvelope />
          </IconButton>
          <Box sx={{ marginLeft: "0.5rem" }}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
              Contact
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(256, 256, 256, 0.8)" }}
            >
              info@aykutgok.com
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: { sm: "0", xs: "1rem" },
          }}
        >
          <IconButton
            sx={{
              color: "#fff",
              backgroundColor: "#23408e",
              "&:hover": { backgroundColor: "#23408e" },
            }}
          >
            <FaPlus />
          </IconButton>
          <Box sx={{ marginLeft: "0.5rem" }}>
            <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold" }}>
              Follow Me
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="https://www.facebook.com/draykutgok" target="_blank">
                <IconButton
                  sx={{
                    color: "#ddd",
                    "&:hover": { color: "rgba(256, 256, 256, 0.8)" },
                  }}
                >
                  <FaFacebookF />
                </IconButton>
              </Link>

              <Link href="https://twitter.com/mdaykutgok" target="_blank">
                <IconButton
                  sx={{
                    color: "#ddd",
                    "&:hover": { color: "rgba(256, 256, 256, 0.8)" },
                  }}
                >
                  <FaTwitter />
                </IconButton>
              </Link>
              <Link href="https://instagram.com/draykutgok" target="_blank">
                <IconButton
                  sx={{
                    color: "#ddd",
                    "&:hover": { color: "rgba(256, 256, 256, 0.8)" },
                  }}
                >
                  <FaInstagram />
                </IconButton>
              </Link>
              <Link
                href="https://www.linkedin.com/in/aykutgok/"
                target="_blank"
              >
                <IconButton
                  sx={{
                    color: "#ddd",
                    "&:hover": { color: "rgba(256, 256, 256, 0.8)" },
                  }}
                >
                  <FaLinkedinIn />
                </IconButton>
              </Link>
              <Link href="https://youtube.com/c/wellesclinic" target="_blank">
                <IconButton
                  sx={{
                    color: "#ddd",
                    "&:hover": { color: "rgba(256, 256, 256, 0.8)" },
                  }}
                >
                  <FaYoutube />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* </motion.div> */}
    </Box>
  );
};

export default About;
