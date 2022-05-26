import { Pagination, Box, Grid } from "@mui/material";

import BlogTravelPostItem from "./BlogTravelPostItem";

export default function BlogTravelPostList({ posts }) {
  return (
    <>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <BlogTravelPostItem />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogTravelPostItem />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogTravelPostItem />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogTravelPostItem />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogTravelPostItem />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogTravelPostItem />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogTravelPostItem />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogTravelPostItem />
          </Grid>
        </Grid>
        {/* {posts.slice(0, 8).map((post) => ( */}
        {/* key={post.slug} post={post} */}
        {/* ))} */}

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          py: { xs: 8, md: 10 },
          "& .MuiPagination-ul": {
            justifyContent: "center",
          },
        }}
      />
    </>
  );
}
