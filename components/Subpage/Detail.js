import { Box, Divider, Link, Typography } from "@mui/material";
import React from "react";

const Detail = () => {
  return (
    <Box
      sx={{
        width: { sm: "calc(100% - 0rem)", xs: "calc(100% - 0rem)" },
        backgroundColor: "#ddd",
        padding: { sm: "3rem", xs: "1rem" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderRadius: "0.75rem",
          backgroundColor: "#fff",
          padding: "1rem",
        }}
      >
        <img
          style={{ width: "100%", borderRadius: "0.75rem" }}
          src="https://images.unsplash.com/photo-1611689102192-1f6e0e52df0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80"
          alt="blog-img"
        />{" "}
        <br /> <br />
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #ddd",
            paddingBottom: "1rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" sx={{ color: "#333" }}>
            16/03/2020 8:35 AM
          </Typography>
          <Typography variant="body1" sx={{ margin: "0 0.5rem" }}>
            -
          </Typography>
          <Typography
            variant="body1"
            sx={{ display: "flex", alignItems: "center" }}
          >
            by{" "}
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", marginLeft: "0.5rem" }}
            >
              Dr. Aykut Gok
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc.
          </Typography>{" "}
          <br />
          <Typography variant="body1">
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh. Donec posuere vulputate
            arcu. Quisque rutrum.
          </Typography>{" "}
          <br />
          <Typography variant="body2">
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </Typography>{" "}
          <br />
          <Typography variant="body1">
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </Typography>{" "}
          <br />
          <img
            style={{ width: "100%", borderRadius: "0.75rem" }}
            src="https://zone-assets-api.vercel.app/assets/images/travel/travel_8.jpg"
            alt="blog-img"
          />{" "}
          <br /> <br />
          <Typography variant="h3">H3 Title</Typography>
          <Typography variant="body1">
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </Typography>{" "}
          <br />
          <Typography variant="h4">H4 Title</Typography>
          <Typography variant="body1">
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </Typography>{" "}
          <br />
          <img
            style={{ width: "100%", borderRadius: "0.75rem" }}
            src="https://zone-assets-api.vercel.app/assets/images/travel/travel_8.jpg"
            alt="blog-img"
          />{" "}
          <br /> <br />
          <Typography variant="h5">H5 Title</Typography>
          <Typography variant="">
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </Typography>{" "}
          <br /> <br />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Divider />
            <Typography variant="h6">Tags: </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
            >
              <Link
                href="/"
                sx={{
                  padding: "0.5rem",
                  backgroundColor: "cadetblue",
                  borderRadius: "0.5rem",
                  margin: "0.2rem",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Donec
              </Link>
              <Link
                href="/"
                sx={{
                  padding: "0.5rem",
                  backgroundColor: "cadetblue",
                  borderRadius: "0.5rem",
                  margin: "0.2rem",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Vulputate
              </Link>
              <Link
                href="/"
                sx={{
                  padding: "0.5rem",
                  backgroundColor: "cadetblue",
                  borderRadius: "0.5rem",
                  margin: "0.2rem",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Aliquam
              </Link>
              <Link
                href="/"
                sx={{
                  padding: "0.5rem",
                  backgroundColor: "cadetblue",
                  borderRadius: "0.5rem",
                  margin: "0.2rem",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Pellentesque
              </Link>
              <Link
                href="/"
                sx={{
                  padding: "0.5rem",
                  backgroundColor: "cadetblue",
                  borderRadius: "0.5rem",
                  margin: "0.2rem",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Ligula
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
