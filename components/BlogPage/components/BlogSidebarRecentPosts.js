import { Box, Link, Stack, Typography } from "@mui/material";

import NextLink from "next/link";

import { styled } from "@mui/material/styles";
import { fDate } from "../../../utils/formatTime";

const DotStyle = styled("span")(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "currentColor",
  margin: theme.spacing(0, 1),
}));

const posts = [
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8 minutes read",
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
    duration: "8 minutes read",
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
    duration: "8 minutes read",
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
    duration: "8 minutes read",
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
    duration: "8 minutes read",
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

export default function BlogSidebarRecentPosts() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" gutterBottom>
        Recent Posts
      </Typography>
      {posts?.map((post, index) => (
        <BlogPostItemMobile key={index} post={post} />
      ))}
    </Stack>
  );
}

function BlogPostItemMobile({ post }) {
  const { title, duration, coverImg, createdAt } = post;

  const textStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={{ xs: "flex-start", md: "unset" }}
      sx={{ width: 1 }}
    >
      <Box
        component="img"
        src={coverImg}
        alt="post-img"
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={0.5}>
        <NextLink passHref as="/blog/blogdetail" href="/blog/blogdetail">
          <Link
            variant={"subtitle2"}
            asLink
            style={{ ...textStyle, color: "#333", textDecoration: "none" }}
          >
            {title}
          </Link>
        </NextLink>

        <Stack
          direction="row"
          flexWrap="wrap"
          alignItems="center"
          sx={{ typography: "caption", color: "#919EAB" }}
        >
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            {fDate(createdAt)}
          </Typography>
          <DotStyle />
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            {duration}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
