import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
// import profil from "../../assets/images/header-bg.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
// import { motion } from "framer-motion";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
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
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AboutImage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
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
        <Grid item xs={6}>
          <Box>
            <img
              src="./assets/header-bg.jpg"
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: "40px",
              }}
              item
              xs={12}
            >
              <Box>
                <Typography variant="h4">Dr.Aykut Gok</Typography>
                <Typography variant="body1">
                  Plastic Reconstructive And Aesthetic Surgeon
                </Typography>
              </Box>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <HiOutlineMail style={{ color: "blue" }} />
                  <Typography ml={1}>info@aykutgok.com</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <AiOutlinePhone style={{ color: "blue" }} />
                  <Typography ml={1}>+90 532 419 88 68</Typography>
                </Box>
              </Box>
            </Grid>
            {/* <Grid xs={12}> */}
            <Box sx={{ padding: "20px", mt: "40px" }}>
              {/* <Typography color="#696969" variant='body'>
                                Specialist is general and plastic surgery, all minimally invasive methods. Senior general surgeon and head of plastic surgery division. <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus tempora laborum illum voluptatum doloribus itaque architecto sunt, earum autem placeat, fugiat assumenda voluptatem perferendis amet sit ea quisquam. Illo debitis voluptates, ipsa, dolore quia aliquid pariatur necessitatibus blanditiis eum quos unde nesciunt voluptatum dolorem est, non reprehenderit! Deleniti, amet? <br /><br /> Mollitia ut itaque nobis incidunt praesentium tempore numquam, voluptatibus vitae voluptas exercitationem dolores odit aliquam debitis est, fugit fuga eligendi nostrum inventore! Tenetur dolorem laboriosam libero quam odit exercitationem totam quia fugiat dignissimos reprehenderit, facilis quidem incidunt cupiditate in reiciendis mollitia magnam assumenda rerum et laborum iure. Expedita, minus blanditiis.</Typography> */}
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="career" {...a11yProps(0)} />
                  <Tab label="general Information" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Typography variant="h6" fontWeight="bold">
                  Lorem
                </Typography>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloremque, harum.
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Lorem
                </Typography>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloremque, harum. Lorem ipsum dolor sit amet consectetur
                  adipisicing.
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Lorem
                </Typography>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloremque, harum.
                </Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                Specialist is general and plastic surgery, all minimally
                invasive methods. Senior general surgeon and head of plastic
                surgery division. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                necessitatibus tempora laborum illum voluptatum doloribus itaque
                architecto sunt, earum autem placeat, fugiat assumenda
                voluptatem perferendis amet sit ea quisquam. <br />
                <br /> Mollitia ut itaque nobis incidunt praesentium tempore
                numquam, voluptatibus vitae voluptas exercitationem dolores odit
                aliquam debitis est,
              </TabPanel>
            </Box>

            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutImage;