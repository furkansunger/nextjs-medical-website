import React from "react";

import { Container, Stack, Box, Avatar, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

import { fDate } from "../../../utils/formatTime";

import NextLink from "next/link";

import useTranslation from "next-translate/useTranslation";

const DotStyle = styled("span")(() => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "currentColor",
  margin: "0 1rem",
}));

const posts = [
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
];

const BlogFeaturedPosts = ({blogs}) => {

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
          <PostItem largePost post={blogs[0]} />

          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
              },
              gridTemplateRows: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
              },
            }}
          >
            {blogs.slice(1, 5).map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

function PostItem({ post, largePost }) {
  // const { title, content, estimated_time, publishedAt, thumbnail } =
  //   post;

  const { t } = useTranslation();

  const textStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Box sx={{ borderRadius: 4, overflow: "hidden", position: "relative"}}>
      <Box>
        <Box
          component="img"
          src={post?.thumbnail?.url}
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
            {fDate(post?.publishedAt)}
          </Typography>
          <DotStyle />
          {/* <Typography variant="caption"></Typography> */}
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            {t("common:textDuration", { number: post?.estimated_time })}
          </Typography>
        </Stack>

        <NextLink href={`/blog/blogdetail`} style={{ textDecoration: "none" }}>
          <Typography
            aslink
            sx={{
              color: "rgba(256, 256, 256, 0.9)",
              cursor: "pointer",
              ...textStyle,
              typography: "h6",
              ...(largePost && {
                typography: { xs: "h6", md: "h4" },
              }),
            }}
          >
            {post?.title}
          </Typography>
        </NextLink>

        {largePost && (
          <Typography sx={{ opacity: 0.6, ...textStyle }}>
            {post?.content}
          </Typography>
        )}

        {/* <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: "body2", pt: 1.5 }}
        >
          <Avatar
            src={author.authorImg}
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
          {author.name}
        </Stack> */}
      </Stack>

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
