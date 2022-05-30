import { Box, Container, Grid } from "@mui/material";
import React from "react";
import {
  BlogFeaturedPosts,
  BlogPostLists,
  BlogSidebar,
  // BlogTrendingTopics,
} from "../../components/BlogPage";
import MainLayout from "../../components/Layout";

import Head from "next/head";

import useTranslation from 'next-translate/useTranslation'


const Blog = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("common:textBlog")} | Dr. Aykut Gok</title>
      </Head>
      <Box>
        <BlogFeaturedPosts />
        {/* <BlogTrendingTopics /> */}

        <Container sx={{ padding: "2rem 2rem 0" }}>
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
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;
