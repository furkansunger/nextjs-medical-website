import React from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import QuestionForm from "./QuestionForm";
import DummySearchBar from "../UI/DummySearchBar";

const data = [
  {
    question: "What is the difference between a business and a non-business?",
    Answer:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
  },
  {
    question: "What is the difference between a business and a non-business?",
    Answer:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
  },
  {
    question: "What is the difference between a business and a non-business?",
    Answer:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
  },
  {
    question: "What is the difference between a business and a non-business?",
    Answer:
      "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,",
  },
];

export default function FaqBody({ data }) {
  return (
    <Grid
      alignItems="flex-start"
      container
      px={{ md: 10, xs: 5 }}
      rowSpacing={4}
      mb="35vh"
    >
      <Grid
        item
        container
        xs={12}
        sx={{
          paddingX: { md: "2vw", xs: "0vw" },
        }}
      >
        <DummySearchBar
          sx={{ width: { md: "40vw", xs: "100%" }, marginTop: "50px" }}
          placeholder="Search For Questions"
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={8}
        justifyContent="center"
        sx={{
          paddingX: { md: "2vw", xs: "2vw" },
        }}
      >
        <ControlledAccordions data={data} />
      </Grid>
      <Grid
        maxHeight="400px"
        item
        container
        xs={12}
        md={4}
        // position={{ md: "sticky" }}
        top={{ md: "20px" }}
        mt={{ md: "-25vh" }}
        justifyContent="center"
        sx={{
          paddingX: "2vw",
          mb: { xs: "100px", md: "0" },
        }}
      >
        <QuestionForm />
      </Grid>
    </Grid>
  );
}

const ControlledAccordions = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box
      sx={{
        minWidth: "100%",
      }}
    >
      {data ? (
        data.map(({ question, Answer }, index) => {
          return (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                marginBottom: "13px",
                borderRadius: "40px ",
                backgroundColor: "rgb(215, 236, 236)",
                "&:before": {
                  opacity: 0,
                },
                "&:first-of-type": {
                  borderRadius: "40px ",
                },
                "&:last-of-type": {
                  borderRadius: "40px ",
                },
              }}
            >
              <AccordionSummary
                sx={{
                  paddingY: "10px",
                  ".MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "15px",
                  },
                }}
                expandIcon={
                  <IoIosArrowDropdownCircle
                    size="1.5em"
                    style={{ color: "#005c71" }}
                  />
                }
              >
                <Typography
                  sx={{
                    width: "95%",
                    padding: "0 2vw 0 2vw",
                    color: "#222",
                    fontSize: {
                      md: "1.2em",
                      xs: "1em",
                    },
                  }}
                >
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ width: "95%", padding: "0 2vw 2vh 2vw" }}>
                  {Answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })
      ) : (
        <Typography sx={{ padding: "0 2vw 2vh 2vw" }}>
          no questions yet
        </Typography>
      )}
    </Box>
  );
};
