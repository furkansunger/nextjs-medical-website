import { Box, Container, Grid } from "@mui/material";
import React from "react";
import {
  BlogFeaturedPosts,
  BlogPostLists,
  BlogSidebar,
  BlogTrendingTopics,
} from "../../components/BlogPage";
import MainLayout from "../../components/Layout";

const Blog = () => {
  return (
    <Box>
      <BlogFeaturedPosts />
      <BlogTrendingTopics />

      <Container sx={{ padding: "8rem 2rem 0 2rem" }}>
        <Grid container spacing={{ md: 8 }}>
          <Grid item xs={12} md={8}>
            <BlogPostLists />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogSidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Blog.Layout = MainLayout;

export default Blog;
