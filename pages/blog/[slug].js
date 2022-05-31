import {
  Grid,
  Chip,
  Stack,
  Divider,
  Container,
  Typography,
  Box,
  Breadcrumbs,
  Link,
} from "@mui/material";

import { GrFormNext } from "react-icons/gr";

import {
  BlogAuthorInfo,
  BlogSidebar,
  BlogPostHero,
} from "../../components/BlogPage";

import { useRouter } from "next/router";

import SocialButtons from "../../components/UI/SocialButtons";
import MainLayout from "../../components/Layout";

import NextLink from "next/link";
import Head from "next/head";

import useTranslation from "next-translate/useTranslation";
import { getMultipleData } from "../../services/fetchers/publicData";

const TAGS = [
  { label: "Marketing", path: "#" },
  { label: "Development", path: "#" },
  { label: "Banking", path: "#" },
  { label: "Community", path: "#" },
  { label: "Tutorials", path: "#" },
];

export default function BlogDetail({ post, posts }) {
  //   const { frontmatter, content } = post;
  //   const { title, description, author, shareLinks, tags } = frontmatter;

  const { t } = useTranslation();

  const router = useRouter();

  const onClick = (href) => {
    router.push(href);
  };

  return (
    <>
      <Head>
        <title>Blog Detail | Dr. Aykut Gok</title>
      </Head>
      <Box>
        <Box sx={{ padding: "6rem 0" }}>
          <BlogPostHero /> {/* post={post} */}
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
              <Typography color="text.primary">Blog Title</Typography>
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
                <Box sx={{ mb: 5 }}>
                  <Typography variant="h6">
                    Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                    augue ac venenatis condimentum, sem libero volutpat nibh,
                    nec pellentesque velit pede quis nunc.
                  </Typography>{" "}
                  <br />
                  <Typography variant="body1">
                    Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                    augue ac venenatis condimentum, sem libero volutpat nibh,
                    nec pellentesque velit pede quis nunc. Phasellus viverra
                    nulla ut metus varius laoreet. Praesent egestas tristique
                    nibh. Donec posuere vulputate arcu. Quisque rutrum.
                  </Typography>{" "}
                  <br />
                  <Typography variant="body2">
                    Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                    vestibulum aliquam leo. Nam commodo suscipit quam.
                    Vestibulum ullamcorper mauris at ligula.
                  </Typography>{" "}
                  <br />
                  <Typography variant="body1">
                    Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                    augue ac venenatis condimentum, sem libero volutpat nibh,
                    nec pellentesque velit pede quis nunc. Phasellus viverra
                    nulla ut metus varius laoreet. Praesent egestas tristique
                    nibh.
                  </Typography>{" "}
                  <br />
                  <Box
                    component="img"
                    style={{ width: "100%", borderRadius: "0.75rem" }}
                    src="https://zone-assets-api.vercel.app/assets/images/travel/travel_8.jpg"
                    alt="blog-img"
                  />{" "}
                  <br /> <br />
                  <Typography variant="h3">H3 Title</Typography>
                  <Typography variant="body1">
                    Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                    vestibulum aliquam leo. Nam commodo suscipit quam.
                    Vestibulum ullamcorper mauris at ligula.
                  </Typography>{" "}
                  <br />
                  <Typography variant="h4">H4 Title</Typography>
                  <Typography variant="body1">
                    Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                    vestibulum aliquam leo. Nam commodo suscipit quam.
                    Vestibulum ullamcorper mauris at ligula.
                  </Typography>{" "}
                  <br />
                  <Box
                    component="img"
                    style={{ width: "100%", borderRadius: "0.75rem" }}
                    src="https://zone-assets-api.vercel.app/assets/images/travel/travel_8.jpg"
                    alt="blog-img"
                  />{" "}
                  <br /> <br />
                  <Typography variant="h5">H5 Title</Typography>
                  <Typography variant="">
                    Donec posuere vulputate arcu. Quisque rutrum. Curabitur
                    vestibulum aliquam leo. Nam commodo suscipit quam.
                    Vestibulum ullamcorper mauris at ligula.
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  alignItems="center"
                  flexWrap="wrap"
                  sx={{ my: 6 }}
                >
                  <Typography variant="subtitle2" sx={{ mr: 1 }}>
                    {t("common:textTags")}:
                  </Typography>
                  {TAGS.map((tag) => (
                    <Chip
                      key={tag.label}
                      size="small"
                      label={tag.label}
                      sx={{ m: 0.5 }}
                      onClick={() => {
                        onClick(tag.path);
                      }}
                    />
                  ))}
                </Stack>
                <Stack direction="row" alignItems="center" flexWrap="wrap">
                  <Typography variant="subtitle2" sx={{ mr: 1 }}>
                    {t("common:textShare")}:
                  </Typography>
                  <SocialButtons />
                </Stack>
                {/* <Divider sx={{ mt: 8 }} /> */}
                {/* <BlogAuthorInfo /> author={author} */}
              </Grid>

              <Grid item xs={12} md={4}>
                <BlogSidebar />
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
        params: { slug: slug },
      };
    }
  );

  return {
    paths: posts,
    fallback: false,
  };
};