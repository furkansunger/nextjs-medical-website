import { Stack } from "@mui/material";

// import BlogSidebarCategories from "./BlogSidebarCategories";
import BlogSidebarPopularTags from "./BlogSidebarPopularTags";
import BlogSidebarRecentPosts from "./BlogSidebarRecentPosts";

export default function BlogSidebar({blogs}) {
  return (
    <>
      <Stack
        spacing={5}
        sx={{
          pb: { xs: 8, md: 0 },
        }}
      >
        {/* <BlogSidebarCategories /> */}
        <BlogSidebarPopularTags />
        <BlogSidebarRecentPosts blogs={blogs} /> {/* recentPosts={recentPosts} */}
      </Stack>
    </>
  );
}
