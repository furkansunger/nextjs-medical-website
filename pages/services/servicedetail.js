import {
  Grid,
  Box,
  Stack,
  Divider,
  Collapse,
  Container,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { GrFormNext } from "react-icons/gr";
import MainLayout from "../../components/Layout";
import ServiceDetails from "../../components/ServicesPage/components/ServiceDetails";
import ServiceForm from "../../components/ServicesPage/components/ServiceForm";
import ServiceHeader from "../../components/ServicesPage/components/ServiceHeader";
import TravelTourGallery from "../../components/ServicesPage/components/TravelTourGallery";

export default function ServiceDetail() {
  return (
    <Box sx={{ padding: "10rem 0 6rem 0" }}>
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<GrFormNext fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/services/">
            Services
          </Link>
          <Typography color="text.primary">Service Title</Typography>
        </Breadcrumbs>
        <TravelTourGallery /> {/* gallery={tour.gallery} */}
        <Grid container spacing={4}>
          <Grid item lg={8} md={7} xs={12}>
            <ServiceHeader /> {/* tour={tour} */}
            <Divider sx={{ borderStyle: "dashed", my: 5 }} />
            <ServiceDetails /> {/* tour={tour} */}
          </Grid>
          <Grid item xs={12} md={5} lg={4} sx={{ position: "relative" }}>
            <ServiceForm /> {/* tour={tour} */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ServiceDetail.Layout = MainLayout;
