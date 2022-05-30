import { Box, Grid, IconButton, Link, Typography, Button, Container } from "@mui/material";
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
  FaHandHoldingMedical,
  FaPenFancy,
} from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import useTranslation from "next-translate/useTranslation";
import PortfolioGallery from "./PortfolioGallery";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Container >
        <Box
          boxShadow={3}
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: { sm: "4rem", xs: "1rem" },
            // boxShadow: "0 4px 8px 0 #80eef3, 0 6px 20px 0 #80eef3"
          }}
        >
          <Grid
            container
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
                  color: "#005c71",
                  fontSize: { xl: "2rem", xs: "1rem" },
                  backgroundColor: "#ddd",
                  padding: "0.25rem",
                  borderRadius: "0.25rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {t("common:textAbout")}
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
                    color: "#005c71",
                    backgroundColor: "transparent",
                    marginTop: "1rem",
                    borderRadius: "95% 4% 97% 5% / 4% 94% 3% 95%",
                    border: "2px solid #005c71",
                    width: "8rem",
                    height: "8rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    marginRight: "1rem",
                  }}
                  variant="filled"
                  href="/about"
                >
                  <FiMoreHorizontal style={{ fontSize: "1.5rem" }} />
                  {t("common:buttonReadMore")}
                </Button>
                <Button
                  sx={{
                    color: "#005c71",
                    backgroundColor: "transparent",
                    marginTop: "1rem",
                    borderRadius: "95% 4% 97% 5% / 4% 94% 3% 95%",
                    border: "2px solid #005c71",
                    width: "8rem",
                    height: "8rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    marginRight: "1rem",
                  }}
                  variant="filled"
                  href="/services"
                >
                  <FaHandHoldingMedical style={{ fontSize: "1.5rem" }} />
                  {t("common:buttonServices")}
                </Button>
                <Button
                  sx={{
                    color: "#005c71",
                    backgroundColor: "transparent",
                    marginTop: "1rem",
                    borderRadius: "95% 4% 97% 5% / 4% 94% 3% 95%",
                    border: "2px solid #005c71",
                    width: "8rem",
                    height: "8rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    marginRight: "1rem",
                  }}
                  variant="filled"
                  href="/blog"
                >
                  <FaPenFancy style={{ fontSize: "1.5rem" }} />
                  {t("common:buttonBlog")}
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
                marginBottom: { sm: "0", xs: "3rem" },
              }}
            >
              <Box
                component="img"
                style={{
                  width: "60%",
                  borderRadius: "50%",
                  boxShadow: "0px 3px 12px 0px rgba(0,0,0,0.6)",
                }}
                src="./assets/about2.png"
                alt="about-img"
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              marginTop: "2rem",
              backgroundColor: "#00adb5",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              padding: "2rem",
              borderRadius: "1.5rem",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
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
                  backgroundColor: "#005c71",
                  "&:hover": { backgroundColor: "#005c71" },
                }}
              >
                <FaPhoneAlt />
              </IconButton>
              <Box sx={{ marginLeft: "0.5rem" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  {t("common:textCall")}
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
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
                  backgroundColor: "#005c71",
                  "&:hover": { backgroundColor: "#005c71" },
                }}
              >
                <FaEnvelope />
              </IconButton>
              <Box sx={{ marginLeft: "0.5rem" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  {t("common:textContact")}
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff" }}>
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
                  backgroundColor: "#005c71",
                  "&:hover": { backgroundColor: "#005c71" },
                }}
              >
                <FaPlus />
              </IconButton>
              <Box sx={{ marginLeft: "0.5rem" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  {t("common:textFollow")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="https://www.facebook.com/draykutgok"
                    target="_blank"
                  >
                    <IconButton
                      sx={{
                        fontSize: "1.25rem",
                        color: "#fff",
                        "&:hover": { color: "#fff" },
                      }}
                    >
                      <FaFacebookF />
                    </IconButton>
                  </Link>

                  <Link href="https://twitter.com/mdaykutgok" target="_blank">
                    <IconButton
                      sx={{
                        fontSize: "1.25rem",
                        color: "#fff",
                        "&:hover": { color: "#fff" },
                      }}
                    >
                      <FaTwitter />
                    </IconButton>
                  </Link>
                  <Link href="https://instagram.com/draykutgok" target="_blank">
                    <IconButton
                      sx={{
                        fontSize: "1.25rem",
                        color: "#fff",
                        "&:hover": { color: "#fff" },
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
                        fontSize: "1.25rem",
                        color: "#fff",
                        "&:hover": { color: "#fff" },
                      }}
                    >
                      <FaLinkedinIn />
                    </IconButton>
                  </Link>
                  <Link href="https://youtube.com/c/wellesclinic" target="_blank">
                    <IconButton
                      sx={{
                        fontSize: "1.25rem",
                        color: "#fff",
                        "&:hover": { color: "#fff" },
                      }}
                    >
                      <FaYoutube />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>

      <PortfolioGallery />
    </>
  );
};

export default About;
