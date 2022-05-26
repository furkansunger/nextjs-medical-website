import { Typography, Stack, Box, Divider } from "@mui/material";

export default function ServiceDetails() {
  return (
    <Stack spacing={5}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6">
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc.
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh. Donec posuere vulputate arcu. Quisque
          rutrum.
        </Typography>{" "}
        <br />
        <Typography variant="body2">
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
        </Typography>{" "}
        <br />
        <Typography variant="body1">
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
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
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
        </Typography>{" "}
        <br />
        <Typography variant="h4">H4 Title</Typography>
        <Typography variant="body1">
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
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
          Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
          aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris
          at ligula.
        </Typography>
      </Box>
    </Stack>
  );
}
