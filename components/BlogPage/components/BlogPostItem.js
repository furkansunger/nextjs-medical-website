import { styled } from "@mui/material/styles";
import { Stack, Avatar, Typography, Box } from "@mui/material";

import NextLink from "next/link";

import { fDate } from "../../../utils/formatTime";

import useTranslation from "next-translate/useTranslation";

const DotStyle = styled("span")(() => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "currentColor",
  margin: "0 1rem",
}));

export default function BlogPostItem({ post }) {

  const { t } = useTranslation();

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
        src={post?.thumbnail?.url}
        alt="post-img"
        sx={{ borderRadius: 2 }}
      />

      <Stack spacing={1}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: "caption", color: "#0008" }}
        >
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            {fDate(`${post?.publishedAt}`)}
          </Typography>
          <DotStyle />
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            {t("common:textDuration", { number: post?.estimated_time })}
          </Typography>
        </Stack>

        <NextLink passHref as={`/blog/${post?.slug}`} href={`/blog/${post?.slug}`}>
          <Typography aslink style={{ ...textStyle, cursor: "pointer" }} variant="h5">
            {post?.title}
          </Typography>
        </NextLink>
      </Stack>
    </Stack>
  );
}
