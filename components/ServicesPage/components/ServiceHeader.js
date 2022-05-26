import { Typography, Stack } from "@mui/material";

export default function ServiceHeader() {
  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: "column", md: "row" }}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ flexGrow: 1, pr: { md: 10 } }}
        >
          Service Title
        </Typography>
      </Stack>
    </>
  );
}
