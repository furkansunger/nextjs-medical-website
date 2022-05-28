import {
  Grid,
  Box,
  Divider,
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
import ServiceGallery from "../../components/ServicesPage/components/ServiceGallery";

import useTranslation from 'next-translate/useTranslation'

export default function ServiceDetail() {
  const { t } = useTranslation()

  return (
    <Box sx={{ padding: "10rem 0 6rem 0" }}>
      <Container>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<GrFormNext fontSize="small" />}
        >
          <Link underline="hover" color="inherit" href="/">
          {t("common:textHome")}
          </Link>
          <Link underline="hover" color="inherit" href="/services/">
          {t("common:textServices")}
          </Link>
          <Typography color="text.primary">Service Title</Typography>
        </Breadcrumbs>
        <ServiceGallery /> {/* gallery={tour.gallery} */}
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
