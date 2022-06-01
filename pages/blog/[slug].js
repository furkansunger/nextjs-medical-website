import {
  Grid,
  Chip,
  Stack,
  Divider,
  Container,
  Typography,
  Box,
  Breadcrumbs,
} from "@mui/material";

import { GrFormNext } from "react-icons/gr";

import { BlogSidebar, BlogPostHero } from "../../components/BlogPage";

import { useRouter } from "next/router";

import MainLayout from "../../components/Layout";

import NextLink from "next/link";
import Head from "next/head";

import useTranslation from "next-translate/useTranslation";
import { getMultipleData } from "../../services/fetchers/publicData";

import snarkdown from "snarkdown";

export default function BlogDetail({ post, blogs }) {
  const { t } = useTranslation();

  const router = useRouter();

  const onClick = (href) => {
    router.push(href);
  };

  return (
    <>
      <Head>
        <title>{post?.title} | Dr. Aykut Gok</title>
      </Head>
      <Box>
        <Box sx={{ padding: "6rem 0" }}>
          <BlogPostHero post={post} />
          <Container>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<GrFormNext fontSize="small" />}
              sx={{ padding: "2rem 0" }}
            >
              <NextLink underline="hover" color="inherit" href="/">
                {t("common:textHome")}
              </NextLink>
              <NextLink underline="hover" color="inherit" href="/blog/">
                {t("common:textBlog")}
              </NextLink>
              <Typography color="text.primary">{post?.title}</Typography>
            </Breadcrumbs>
          </Container>
          <Divider
            sx={{
              mb: { xs: 6, md: 10 },
            }}
          />
          <Container>
            <Grid container spacing={{ md: 8 }}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{ mb: 5 }}
                  dangerouslySetInnerHTML={{
                    __html: snarkdown(post?.content),
                  }}
                ></Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  flexWrap="wrap"
                  sx={{ my: 6 }}
                >
                  <Typography variant="subtitle2" sx={{ mr: 1 }}>
                    {t("common:textTags")}:
                  </Typography>
                  {post
                    ? post.tags?.map((item, index) => (
                        <Chip
                          key={index}
                          size="small"
                          label={item.tag}
                          sx={{ m: 0.5 }}
                        />
                      ))
                    : null}
                </Stack>
              </Grid>

              <Grid item xs={12} md={4}>
                <BlogSidebar blogs={blogs} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

BlogDetail.Layout = MainLayout;

export const getStaticPaths = async () => {
  const posts = (await getMultipleData("blogs", "fields=slug")).map(
    ({ slug }) => {
      return {
        params: { slug },
      };
    }
  );

  return {
    paths: posts,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const post = (
    await getMultipleData(
      "blogs",
      "",
      "populate=tags,thumbnail",
      `&filters[slug][$eq]=${ctx.params.slug}`
    )
  )[0];

  const blogs = await getMultipleData("blogs", "", "populate=thumbnail,tags");

  return {
    props: { post, blogs },
  };
};
