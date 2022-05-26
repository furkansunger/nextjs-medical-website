import { Box, Link, Stack, Typography } from "@mui/material";

import NextLink from "next/link";

import { styled } from '@mui/material/styles';
import { fDate } from "../../../utils/formatTime";

const DotStyle = styled("span")(({ theme }) => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "currentColor",
  margin: theme.spacing(0, 1),
}));

export default function BlogSidebarRecentPosts({ recentPosts }) {
  // const { list, path } = recentPosts;

  return (
    <Stack spacing={3}>
      <Typography variant="h4" gutterBottom>
        Recent Posts
      </Typography>
        {/* key={post.slug}
        post={post}
        onSiderbar
        path={path} */}
      {/* {list.map((post) => ( */}
        <BlogPostItemMobile />
        <BlogPostItemMobile />
        <BlogPostItemMobile />
        <BlogPostItemMobile />
      {/* ))} */}
    </Stack>
  );
}

function BlogPostItemMobile({ post, path, onSiderbar }) {
  //   const { slug, frontmatter } = post;
  //   const { title, duration, coverImg, createdAt } = frontmatter;

  //   const as = `${path}/${slug}`;
  //   const href = `${path}/[slug]`;

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
        src="https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg"
        alt="post-img"
        sx={{
          width: 80,
          height: 80,
          flexShrink: 0,
          borderRadius: 1.5,
        }}
      />

      <Stack spacing={0.5}>
        <NextLink passHref as="/" href="/">
          <Link variant={"subtitle2"} asLink style={{ ...textStyle, color: "#333", textDecoration: "none" }}>
            Believing These 7 Myths About Event Keeps You From Growing
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
      </Stack>
    </Stack>
  );
}
