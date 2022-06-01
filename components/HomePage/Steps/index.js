import {
  Box,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";

import React from "react";

import { IoIosArrowDown } from "react-icons/io";

import useTranslation from "next-translate/useTranslation";

const Steps = ({ steps }) => {

  const [expanded, setExpanded] = React.useState(`panel${steps[0]?.id}`);
  const [image, setImage] = React.useState(steps[0]?.image?.url);

  const { t } = useTranslation();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);

    const filter = steps?.find(item => item.title === event.target.innerText)

    setImage(filter?.image?.url);
  };

  return (
    <Box sx={{ padding: "4rem 0" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Box sx={{ marginBottom: "4rem" }}>
              <Typography variant="body1">{t("common:stepsTitle")}</Typography>
              <Typography variant="h3">{t("common:textSteps")}</Typography>
            </Box>

            {
              steps && steps.map((item, index) => (
                <Accordion
                key={index}
                expanded={expanded === `panel${item.id}`}
                onChange={handleChange(`panel${item.id}`)}
                sx={{
                  marginBottom: "1rem",
                  borderRadius: "1rem",
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                  "&:before": { background: "transparent" },
                }}
              >
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls={`panel${item.id}a-content`}
                  id={`panel${item.id}a-header`}
                  sx={{
                    border: "none",
                    borderRadius: "1rem",
                    backgroundColor:
                      expanded === `panel${item.id}` ? "#ddd" : "initial",
                  }}
                >
                  <Typography variant="h5">{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ border: "none" }}>
                  <Typography>{item.step_description}</Typography>
                </AccordionDetails>
              </Accordion>
              ))
            }
          </Grid>
          <Grid item xs={12} sm={6} sx={{ padding: "2rem" }}>
            <Box
              component="img"
              src={image}
              alt="step-img"
              sx={{ borderRadius: "1rem", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Steps;
