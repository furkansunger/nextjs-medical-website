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

const ContactInfo = () => {
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
              Get In Touch
            </Typography>

            <Stack spacing={3}>
              <Stack spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaEnvelope style={{ fontSize: "1.5rem" }} />
                  <Typography variant="body1" sx={{ marginLeft: "0.5rem" }}>
                    Email
                  </Typography>
                </Box>
                <Link
                  variant="body2"
                  href="mailto:info@aykutgok.com"
                  sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  info@aykutgok.com
                </Link>
              </Stack>

              <Stack spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaPhoneAlt style={{ fontSize: "1.5rem" }} />
                  <Typography variant="body1" sx={{ marginLeft: "0.5rem" }}>
                    Phone
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  +90 532 419 8868
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaMapMarkerAlt style={{ fontSize: "1.5rem" }} />
                  <Typography variant="body1" sx={{ marginLeft: "0.5rem" }}>
                    Address
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(0, 0, 0, 0.6)" }}
                >
                  Harbiye, Teşvikiye Cad, Bostan Sk. No:2 D:Kat 6, 34367
                  Şişli/İstanbul
                </Typography>
              </Stack>

              <Divider sx={{ borderStyle: "dashed", width: 1 }} />

              <Stack
                spacing={1}
                alignItems={{ xs: "center", md: "flex-start" }}
              >
                <Typography variant="overline" fontWeight="bold">
                  Follow Us
                </Typography>
                <SocialButtons />
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
