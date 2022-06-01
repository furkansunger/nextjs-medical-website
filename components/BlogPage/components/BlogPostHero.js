import { Grid, Stack, Container, Typography, Box, alpha } from "@mui/material";
import { fDate } from "../../../utils/formatTime";

import useTranslation from "next-translate/useTranslation";

export default function BlogPostHero({ post }) {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: "6rem 0", position: "relative" }}>
      <Container sx={{ position: "relative", zIndex: 9 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack
              spacing={3}
              alignItems={{
                xs: "center",
                md: "flex-start",
              }}
              sx={{
                color: "#fff",
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: 0.72 }}>
                {t("common:textDuration", { number: post?.estimated_time })}
              </Typography>

              <Typography variant="h2" component="h1">
                {post?.title}
              </Typography>

              <Typography variant="caption" sx={{ opacity: 0.72 }}>
                {fDate(post?.publishedAt, "dd/MM/yyyy p")}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          top: 0,
          left: 0,
          zIndex: 8,
          width: "100%",
          height: "100%",
          position: "absolute",
          background: `linear-gradient(to bottom, ${alpha(
            "#000000",
            0
          )} 0%, #000000 75%)`,
        }}
      ></Box>

      <Box
        component="img"
        alt="hero"
        src={post?.thumbnail?.url}
        sx={{ position: "absolute", top: 0, left: 0, width: 1, height: 1 }}
      />
    </Box>
  );
}
