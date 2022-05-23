import { Box } from "@mui/material";
import React from "react";
import { BlogFeaturedPosts } from "../components/BlogPage";
import MainLayout from "../components/Layout"

const Blog = () => {
  return (
    <Box>
      <BlogFeaturedPosts />
    </Box>
  );
};

Blog.Layout = MainLayout;

export default Blog;
