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
  const { id, title, duration, coverImg, author, createdAt } = post;

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
        src={coverImg}
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
            {fDate(createdAt)}
          </Typography>
          <DotStyle />
          <Typography
            variant="caption"
            sx={{ fontSize: "12px", fontWeight: "300" }}
          >
            {t("common:textDuration", { number: duration })}
          </Typography>
        </Stack>

        <NextLink passHref as="/blog/blogdetail" href="/blog/blogdetail">
          <Typography asLink style={{ ...textStyle, cursor: "pointer" }} variant="h5">
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
