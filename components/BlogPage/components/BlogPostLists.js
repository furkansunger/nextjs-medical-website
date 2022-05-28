import { Pagination, Box, Grid } from "@mui/material";

import BlogPostItem from "./BlogPostItem";

const posts = [
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
  {
    id: "1",
    title: "Believing These 7 Myths About Event Keeps You From Growing",
    description:
      "Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.",
    duration: "8",
    createdAt: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Jayvion Simon",
      authorImg:
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
    },
    coverImg:
      "https://zone-assets-api.vercel.app/assets/images/travel/travel_2.jpg",
  },
];

export default function BlogTravelPostList() {
  return (
    <>
      <Grid container spacing={2}>
        {posts?.map((post, index) => (
          <Grid key={index} item sm={6} xs={12}>
            <BlogPostItem post={post} />
          </Grid>
        ))}
      </Grid>

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
