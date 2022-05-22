// import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Grid, Typography } from '@mui/material'
// import React from 'react'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import plastic2 from '../../assets/images/plastic2.jpg'

// const dummyData = [
//     {
//         id: 0,
//         title: 'Who is Dr.Aykut Gok ?',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
//     },
//     {
//         id: 1,
//         title: 'How can I make an appointment for Dr.Aykut Gok?',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
//     },
//     {
//         id: 2,
//         title: 'Where is Dr. Aykut Gok Clinic?',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
//     },
//     {
//         id: 3,
//         title: "What are Dr Aykut Gok's areas of expertise?",
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
//     }
// ]

// const AboutAcordion = () => {
//     return (
//         <Container>
//             <Typography marginBottom={4} variant='h3'>FAQs about Dr.Aykut Gok</Typography>
//             <Grid boxShadow={3} sx={{ padding: "20px 0px 20px 0px", borderRadius: "15px", background: "#fff", display: "flex", alignItems: "center" }} container>
//                 <Grid sx={{ padding: "15px" }} item xs={6}>
//                     {
//                         dummyData.map((item) => {
//                             return (
//                                 <Accordion sx={{
//                                     background: "#dedede",
//                                     marginBottom: "13px",
//                                     borderRadius: "40px",
//                                     "&:first-of-type": {
//                                         borderRadius: "40px ",
//                                     },
//                                     "&:last-of-type": {
//                                         borderRadius: "40px ",
//                                     },
//                                 }}>
//                                     <AccordionSummary
//                                         sx={{
//                                             paddingY: "10px",
//                                             ".MuiAccordionSummary-expandIconWrapper": {
//                                                 marginRight: "15px",
//                                             },
//                                         }}
//                                         expandIcon={<ExpandMoreIcon />}
//                                         aria-controls="panel1a-content"
//                                         id="panel1a-header"

//                                     >
//                                         <Typography color="#FF7D00" variant='h6'>{item.title}</Typography>
//                                     </AccordionSummary>
//                                     <AccordionDetails>
//                                         <Typography>
//                                             {item.content}
//                                         </Typography>
//                                     </AccordionDetails>
//                                 </Accordion>
//                             )
//                         })
//                     }
//                 </Grid>
//                 <Grid sx={{ padding: "15px" }} item xs={6}>
//                     <img
//                         src={plastic2}
//                         width="100%"
//                         height="100%"
//                         style={{ objectFit: "contain" }}
//                     />
//                 </Grid>

//             </Grid>



//         </Container>
//     )
// }

// export default AboutAcordion