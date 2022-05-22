import React from "react";

import { Container, Stack, Box, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

import { fDate } from "../../../utils/formatTime";

import { Link } from "react-router-dom";

const DotStyle = styled("span")(() => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "currentColor",
  margin: "0 1rem",
}));

const BlogFeaturedPosts = () => {
  return (
    <Box sx={{ padding: "10rem 0" }}>
      <Container>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
            },
          }}
        >
          <PostItem largePost />
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
              },
            }}
          >
            {/* {posts.slice(1, 5).map((post) => ( */}
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem /> {/* key={post.slug} post={post} */}
            {/* ))} */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

function PostItem({ post, largePost }) {
  //   const { id, frontmatter } = post;
  //   const { title, description, duration, createdAt, author, coverImg } =
  //     frontmatter;

  const textStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Box sx={{ borderRadius: 4, overflow: "hidden", position: "relative" }}>
      <Box>
        <img
          src="https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg"
          alt="post-img"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Box>

      <Stack
        spacing={1}
        sx={{
          p: 3,
          bottom: 0,
          zIndex: 9,
          position: "absolute",
          color: "rgba(256, 256, 256, 0.7)",
          ...(largePost && {
            p: { xs: 3, md: 5 },
          }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ opacity: 0.72, typography: "caption", width: "100%" }}
        >
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            {fDate("2020-03-16T05:35:07.322Z")}
          </Typography>
          <DotStyle />
          {/* <Typography variant="caption"></Typography> */}
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            8 minutes read
          </Typography>
        </Stack>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            asLink
            sx={{
              color: "rgba(256, 256, 256, 0.9)",
              ...textStyle,
              typography: "h6",
              ...(largePost && {
                typography: { xs: "h6", md: "h4" },
              }),
            }}
          >
            Believing These 7 Myths About Event Keeps You From Growing
          </Typography>
        </Link>

        {largePost && (
          <Typography sx={{ opacity: 0.6, ...textStyle }}>
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc.
          </Typography>
        )}

        <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: "body2", pt: 1.5 }}
        >
          <Avatar
            src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg"
            sx={{
              mr: 1,
              width: 32,
              height: 32,
              ...(largePost && {
                width: { xs: 32, md: 40 },
                height: { xs: 32, md: 40 },
              }),
            }}
          />
          Jayvion Simon
        </Stack>
      </Stack>
      {/* <BgOverlay /> */}
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
    </Box>
  );
}

export default BlogFeaturedPosts;
