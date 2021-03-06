import { Box, Container, Grid } from "@mui/material";
import React from "react";
import {
  BlogFeaturedPosts,
  BlogPostLists,
  BlogSidebar,
} from "../../components/BlogPage";
import MainLayout from "../../components/Layout";

import Head from "next/head";

import useTranslation from 'next-translate/useTranslation'
import { getMultipleData } from "../../services/fetchers/publicData";


const Blog = ({blogs}) => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t("common:textBlog")} | Dr. Aykut Gok</title>
      </Head>
      <Box sx={{paddingBottom: {sm: "6rem", xs: "0"}}}>
        <BlogFeaturedPosts blogs={blogs} />

        <Container>
          <Grid container spacing={{ md: 8 }}>
            <Grid item xs={12} md={8}>
              <BlogPostLists blogs={blogs} />
            </Grid>
            <Grid item xs={12} md={4} sx={{marginTop: {sm: "0", xs: "3rem"}}}>
              <BlogSidebar blogs={blogs} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Blog.Layout = MainLayout;

export default Blog;

export const getStaticProps = async (ctx) => {
  const blogs = await getMultipleData("blogs", "", "populate=thumbnail,tags");

  return {
    props: {
      blogs,
    },
    revalidate: 1,
  };
};
