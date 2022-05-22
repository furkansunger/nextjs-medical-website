import { Box } from "@mui/material";
import React from "react";
import { BlogFeaturedPosts } from "../components/BlogPage";
import AppWrapper from "../wrapper/AppWrapper";

const Blog = () => {
  return (
    <Box>
      <BlogFeaturedPosts />
    </Box>
  );
};

export default AppWrapper(Blog);
