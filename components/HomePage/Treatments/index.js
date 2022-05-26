// import locationIcon from '@iconify/icons-carbon/location';
// @mui
// import { styled } from '@mui/material/styles';
import { Grid, Container, Typography, Stack, Box } from '@mui/material';
// hooks
// import useResponsive from '../../../hooks/useResponsive';
// components
// import { Image, BgOverlay, Iconify, TextMaxLine, TextIconLabel } from '../../../components';
import React from "react";
import { GoPrimitiveDot } from 'react-icons/go';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const dummyData = [
  {
    id: 1,
    img: "assets/treatments.jpg",
    title: "title1"
  },
  {
    id: 2,
    img: "assets/treatments1.jpg",
    title: "title2"
  },
  {
    id: 3,
    img: "assets/treatments2.jpg",
    title: "title3"
  },
  {
    id: 4,
    img: "assets/treatments3.jpg",
    title: "title4"
  },
]




const LINES = [
  'First Class Flights',
  '5 Star Accommodations',
  'Inclusive Packages',
  'Latest Model Vehicles',
  'Handpicked Hotels',
  'Accesibility managment',
];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const Treatments = () => {
  return (
    <RootStyle>
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Grid item xs={12} md={4}>
            <Typography sx={{ color: "text.secondary" }} fontWeight={700} variant="h3">Our Populer Aesthetic Treatments </Typography>
            <Typography sx={{ my: 3, color: 'text.secondary' }}>
              Since wire-frame renderings are relatively simple and fast to calculate, they are
              often used in cases
            </Typography>

            <Stack spacing={2}>
              {LINES.map((line) => (
                <Box key={line}>
                  <Typography sx={{ display: "flex", alignItems: "center", }} variant="body1"> <GoPrimitiveDot style={{ color: "red", marginRight: "20px" }} /> {line}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={{ xs: 4, md: 3 }}>
              {dummyData.map((item, index) => (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    ...(index === 1 && {
                      display: { md: 'inline-flex' },
                      alignItems: { md: 'flex-end' },
                    }),
                  }}
                >

                  <Box
                    sx={{
                      width: 1,
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >

                    <Box
                      component="img"
                      style={{ objectFit: "contain", filter: "sepia(50%)", boxShadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19" }}
                      width="150%"
                      // height="550px"
                      alt={item.title}
                      src={item.img}
                      bax

                    />

                    <Stack
                      spacing={1}
                      sx={{
                        p: 3,
                        left: 0,
                        bottom: 0,
                        zIndex: 9,
                        color: 'common.white',
                        position: 'absolute',
                      }}
                    >
                      <Typography color="black" variant="h4" line={1}>
                        {item.title}
                      </Typography>

                    </Stack>
                  </Box>
                </Grid>
              ))}

            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default Treatments;
