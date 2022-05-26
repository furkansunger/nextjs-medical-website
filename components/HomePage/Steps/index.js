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

const data = [
  {
    id: "1",
    stepsTitle: "Online Free Consultation",
    stepsDesc:
      "With the guidance of our case manager and surgeon, we listen to your expectations and conduct online examinations and interviews in order to create the most accurate treatment plan for you.",
    stepsImg:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
  },
  {
    id: "2",
    stepsTitle: "Booking",
    stepsDesc:
      "All you have to do now is submit your flight details with us once you have booked for your surgery. Our case manager will prepare your itinerary right away.",
    stepsImg:
      "https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
  },
  {
    id: "3",
    stepsTitle: "Welcome to Istanbul",
    stepsDesc:
      "Our transfer service will meet you at the airport and will take you to your hotel. During your time in Istanbul, our PES (patient experience specialist) will be available 7 days a week, 24 hours a day, to assist you.",
    stepsImg:
      "https://images.unsplash.com/photo-1629649456013-88519a031d64?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327",
  },
  {
    id: "4",
    stepsTitle: "Surgery Day",
    stepsDesc:
      "On the day of your surgery, you’ll be picked up from your hotel. Your case manager will be waiting for you at the hospital to assist you during your physical examination.",
    stepsImg:
      "https://images.unsplash.com/photo-1640876777002-badf6aee5bcc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
  },
  {
    id: "5",
    stepsTitle: "Re-check Status",
    stepsDesc:
      "Your final examinations will take place in a our Welles Clinic. Following your treatment, we will transport you to the airport. We keep track of your recovery process and communicate with our team of professionals.",
    stepsImg:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464",
  },
];

const Steps = () => {
  const [expanded, setExpanded] = React.useState("panel1");
  const [image, setImage] = React.useState(
    "https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"
  );

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    const filterData = data.find(
      (item) => item.stepsTitle === event.target.innerText
    );
    setImage(filterData.stepsImg);
  };

  return (
    <Box sx={{ padding: "4rem 0" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} sx={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
            <Box sx={{ marginBottom: "4rem" }}>
              <Typography variant="body1">Reveal the new you</Typography>
              <Typography variant="h3">Lets Get Started</Typography>
            </Box>
            {data?.map((item, index) => (
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
                  <Typography variant="h5">{item.stepsTitle}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ border: "none" }}>
                  <Typography>{item.stepsDesc}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} sx={{ padding: "2rem" }}>
            <Box
              component="img"
              src={image}
              alt="ads"
              sx={{ borderRadius: "1rem", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Steps;
