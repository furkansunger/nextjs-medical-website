import { styled } from "@mui/material/styles";
import { Stack, Avatar, Typography, Box } from "@mui/material";

import NextLink from "next/link";

import { fDate } from "../../../utils/formatTime";

const DotStyle = styled("span")(() => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "currentColor",
  margin: "0 1rem",
}));

export default function BlogTravelPostItem({ post }) {
  // const { slug, frontmatter } = post;
  // const { title, duration, coverImg, author, createdAt } = frontmatter;

  const textStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  };

  return (
    <Stack spacing={2.5}>
      <Box
        component="img"
        src="https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg"
        alt="post-img"
        sx={{ borderRadius: 2 }}
      />

      <Stack spacing={1}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: "caption", color: "#fff8" }}
        >
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            {fDate("2020-03-16T05:35:07.322Z")}
          </Typography>
          <DotStyle />
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            8 minutes read
          </Typography>
        </Stack>

        <NextLink passHref as="/" href="/">
          <Typography asLink style={{ ...textStyle }} variant="h5">
            Believing These 7 Myths About Event Keeps You From Growing
          </Typography>
        </NextLink>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ typography: "body2" }}>
        <Avatar
          src="https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg"
          sx={{ mr: 1 }}
        />
        Jayvion Simon
      </Stack>
    </Stack>
  );
}
