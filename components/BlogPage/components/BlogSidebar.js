import { Stack } from "@mui/material";

import BlogSidebarCategories from "./BlogSidebarCategories";
import BlogSidebarPopularTags from "./BlogSidebarPopularTags";
import BlogSidebarRecentPosts from "./BlogSidebarRecentPosts";

export default function BlogSidebar() {
  return (
    <>
      <Stack
        spacing={5}
        sx={{
          pb: { xs: 8, md: 0 },
        }}
      >
        <BlogSidebarCategories />
        <BlogSidebarRecentPosts /> {/* recentPosts={recentPosts} */}
        <BlogSidebarPopularTags />
      </Stack>
    </>
  );
}
