import React from "react";

import {
  Typography,
  Stack,
  Box,
  Container,
  Grid,
  Link,
  Divider,
} from "@mui/material";

import SocialButtons from "../UI/SocialButtons";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import useTranslation from "next-translate/useTranslation";

const ContactInfo = ({ contactInfo }) => {
  const { t } = useTranslation();

  const { address, email, phone, social_media } = contactInfo;

  return (
    <Box sx={{ marginBottom: "4rem" }}>
      <Container>
        <Grid container spacing={3} justifyContent={{ md: "space-between" }}>
          <Grid item xs={12} md={6} lg={4}>
            <Typography
              variant="h3"
              sx={{
                mb: 5,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {t("common:textGetInTouch")}
            </Typography>

            <Stack spacing={3}>
              <Stack spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaEnvelope
                    style={{ fontSize: "1.5rem", color: "#005c71" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: "0.5rem", color: "#333" }}
                  >
                    {t("common:inputEmail")}
                  </Typography>
                </Box>
                <Link
                  variant="body2"
                  href={`mailto:${email}`}
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                    textDecorationColor: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  {email}
                </Link>
              </Stack>

              <Stack spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaPhoneAlt
                    style={{ fontSize: "1.5rem", color: "#005c71" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: "0.5rem", color: "#333" }}
                  >
                    {t("common:inputPhone")}
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{ color: "rgba(0, 0, 0, 0.7)" }}
                >
                  {phone}
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaMapMarkerAlt
                    style={{ fontSize: "1.5rem", color: "#005c71" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: "0.5rem", color: "#333" }}
                  >
                    {t("common:textAddress")}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(0, 0, 0, 0.7)" }}
                >
                  {address}
                </Typography>
              </Stack>

              <Divider sx={{ borderStyle: "dashed", width: 1 }} />

              <Stack
                spacing={1}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Typography variant="overline" fontWeight="bold">
                  {t("common:textFollow")}
                </Typography>
                <SocialButtons socialMedia={social_media} />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={7}>
            <iframe
              style={{ width: "100%", height: "60vh", borderRadius: "1rem" }}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Op.%20Dr.%20Aykut%20Gok&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near"
              title="Op. Dr. Aykut Gok"
              aria-label="Op. Dr. Aykut Gok"
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactInfo;
