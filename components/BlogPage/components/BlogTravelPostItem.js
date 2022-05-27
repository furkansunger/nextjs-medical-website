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
  const { id, title, duration, coverImg, author, createdAt } = post;

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
        src={coverImg}
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

        <NextLink passHref as="/" href="/">
          <Typography asLink style={{ ...textStyle }} variant="h5">
            {title}
          </Typography>
        </NextLink>
      </Stack>

      <Stack direction="row" alignItems="center" sx={{ typography: "body2" }}>
        <Avatar
          src={author.authorImg}
          sx={{ mr: 1 }}
        />
        {author.name}
      </Stack>
    </Stack>
  );
}
