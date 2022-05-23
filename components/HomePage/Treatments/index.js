import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";

const Treatments = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Popular Aesthetic Treatments
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Box className="hover-overlay-container">
            <img
              className="overlay-image"
              src="https://www.wellesclinic.com/wp-content/uploads/2021/08/shutterstock_650888929-scaled.jpg"
            />
            <Box className="sbt">
              <Typography variant="h5">BASLIK</Typography>
            </Box>
            <Box className="overlay-btn-container">
              <ul>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
              </ul>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box className="hover-overlay-container">
            <img
              className="overlay-image"
              src="https://www.wellesclinic.com/wp-content/uploads/2021/08/shutterstock_218183713-1-scaled.jpg"
            />
            <Box className="sbt">
              <Typography variant="h5">BASLIK</Typography>
            </Box>
            <Box className="overlay-btn-container">
              <ul>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
              </ul>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box className="hover-overlay-container">
            <img
              className="overlay-image"
              src="https://www.wellesclinic.com/wp-content/uploads/2021/08/shutterstock_522725269.jpg"
            />
            <Box className="sbt">
              <Typography variant="h5">BASLIK</Typography>
            </Box>
            <Box className="overlay-btn-container">
              <ul>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
              </ul>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box className="hover-overlay-container">
            <img
              className="overlay-image"
              src="https://www.wellesclinic.com/wp-content/uploads/2021/08/shutterstock_294243569-scaled.jpg"
            />
            <Box className="sbt">
              <Typography variant="h5">BASLIK</Typography>
            </Box>
            <Box className="overlay-btn-container">
              <ul>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
                <Link href="/">
                  <li>Link Lorem, ipsum.</li>
                </Link>
              </ul>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Treatments;
