import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import useTranslation from "next-translate/useTranslation";
import NextImage from "../UI/NextImage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AboutImage = ({ hero, career, generalInfo, contact }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation();

  return (
    <Box>
      <Container
        sx={{
          boxShadow: "3",
          height: "100%",
          background: "#fff",
          position: "relative",
          top: "-75px",
          borderRadius: "15px",
        }}
      >
        <Grid sx={{ padding: "25px" }} container>
          <Grid item xs={12} md={6}>
            <Box>
              <NextImage
                src={hero && hero.url}
                objectFit="cover"
                height="25rem"
                imageStyle={{
                  borderRadius: "0.5rem",
                }}
              />
            </Box>
          </Grid>
          <Grid sx={{ padding: { xs: "5px", md: "20px" }, marginTop: {sm: "0", xs: "1rem"} }} item xs={12} md={6}>
            {/* <Box > */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                // mt: "40px",
              }}
              item
              xs={12}
            >
              <Box>
                <Typography
                  sx={{ fontSize: { xs: "21px", sm: "30px", md: "38px" } }}
                >
                  Dr.Aykut Gok
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: { xs: "11px", sm: "14px", md: "18px" },
                    color: "#333",
                  }}
                >
                  {t("common:doctorTitle")}
                </Typography>
              </Box>
            </Box>
            {/* <Grid xs={12}> */}
            <Box sx={{ mt: "40px" }}>
              {/* <Typography color="#696969" variant='body'>
                                Specialist is general and plastic surgery, all minimally invasive methods. Senior general surgeon and head of plastic surgery division. <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus tempora laborum illum voluptatum doloribus itaque architecto sunt, earum autem placeat, fugiat assumenda voluptatem perferendis amet sit ea quisquam. Illo debitis voluptates, ipsa, dolore quia aliquid pariatur necessitatibus blanditiis eum quos unde nesciunt voluptatum dolorem est, non reprehenderit! Deleniti, amet? <br /><br /> Mollitia ut itaque nobis incidunt praesentium tempore numquam, voluptatibus vitae voluptas exercitationem dolores odit aliquam debitis est, fugit fuga eligendi nostrum inventore! Tenetur dolorem laboriosam libero quam odit exercitationem totam quia fugiat dignissimos reprehenderit, facilis quidem incidunt cupiditate in reiciendis mollitia magnam assumenda rerum et laborum iure. Expedita, minus blanditiis.</Typography> */}
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#00adb5",
                    },
                    color: "#00adb5",
                  }}
                >
                  <Tab label={t("common:tabTextCareer")} {...a11yProps(0)} />
                  <Tab label={t("common:tabTextInfo")} {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                {career}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {generalInfo}
              </TabPanel>
            </Box>
          </Grid>
          {/* </Box> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutImage;
