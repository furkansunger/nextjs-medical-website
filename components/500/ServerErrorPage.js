import { Box, Grid, Typography, Button } from "@mui/material";
// import server500 from "../../assets/images/server500.png";

const ServerErrorPage = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: "0",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          padding: { sm: "4rem", xs: "1rem" },
          margin: "0",
          display: "flex",
          alignItems: "center",
          flexDirection: { sm: "row", xs: "column-reverse" },
        }}
      >
        <Grid item sm={6} xs={12} sx={{ padding: { sm: "4rem", xs: "1rem" } }}>
          <img
            src="./assets/server500.png"
            alt="Server Error Img"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item sm={6} xs={12} sx={{ padding: { sm: "4rem", xs: "1rem" } }}>
          <Typography
            variant="h1"
            sx={{
              color: "#00203F",
              fontWeight: "700",
              fontSize: { lg: "5rem", sm: "4rem", xs: "2rem" },
            }}
          >
            500
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: { lg: "2rem", sm: "1.125rem", xs: "0.5rem" } }}
          >
            Internal Server Error!
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { lg: "1.25rem", sm: "1rem", xs: "0.75rem" } }}
          >
            The server has been deserted for a while. Please be patient or try
            again later.
          </Typography>
          <Button
            component="a"
            href="/"
            variant="outlined"
            sx={{
              fontSize: { lg: "1.2rem", sm: "1rem", xs: "0.7rem" },
              marginTop: "1rem",
              backgroundColor: "#00203F",
              color: "#F6F9FC",
              "&:hover": {
                color: "#F6F9FC",
                backgroundColor: "#00203F",
                borderColor: "#00203F",
              },
            }}
          >
            Go Home
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServerErrorPage;
