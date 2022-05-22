import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import servicesImg from "../../../assets/images/services_480x480.png";
import { motion } from "framer-motion";

const Treatments = () => {
    return (
        <Box
            sx={{
                width: { sm: "calc(100% - 8rem)", xs: "calc(100% - 2rem)" },
                padding: { sm: "4rem", xs: "1rem" },
            }}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                }}
            >
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Popular Aesthetic Treatments
                </Typography>
                <Grid container>
                    <Grid item md={3} sm={6} xs={12} sx={{ padding: "1rem" }}>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "0.5rem",
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "0.5rem",
                                }}
                                src={servicesImg}
                                alt="treatments-img"
                            />
                            <Box
                                sx={{
                                    width: "calc(100% - 2rem)",
                                    height: "25%",
                                    padding: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                    position: "absolute",
                                    bottom: "5px",
                                    left: "0",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    color: "#ddd",
                                    borderBottomLeftRadius: "0.5rem",
                                    borderBottomRightRadius: "0.5rem",
                                }}
                            >
                                <Typography variant="body2">
                                    BODY CONTOURING, DERMAL FILLERS, HAIR TRANSPLANT, LIPOSUCTION
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ padding: "1rem" }}>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "0.5rem",
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "0.5rem",
                                }}
                                src={servicesImg}
                                alt="treatments-img"
                            />
                            <Box
                                sx={{
                                    width: "calc(100% - 2rem)",
                                    height: "25%",
                                    padding: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                    position: "absolute",
                                    bottom: "5px",
                                    left: "0",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    color: "#ddd",
                                    borderBottomLeftRadius: "0.5rem",
                                    borderBottomRightRadius: "0.5rem",
                                }}
                            >
                                <Typography variant="body2">
                                    BODY CONTOURING, DERMAL FILLERS, HAIR TRANSPLANT, LIPOSUCTION
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ padding: "1rem" }}>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "0.5rem",
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "0.5rem",
                                }}
                                src={servicesImg}
                                alt="treatments-img"
                            />
                            <Box
                                sx={{
                                    width: "calc(100% - 2rem)",
                                    height: "25%",
                                    padding: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                    position: "absolute",
                                    bottom: "5px",
                                    left: "0",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    color: "#ddd",
                                    borderBottomLeftRadius: "0.5rem",
                                    borderBottomRightRadius: "0.5rem",
                                }}
                            >
                                <Typography variant="body2">
                                    BODY CONTOURING, DERMAL FILLERS, HAIR TRANSPLANT, LIPOSUCTION
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ padding: "1rem" }}>
                        <Box
                            sx={{
                                position: "relative",
                                borderRadius: "0.5rem",
                            }}
                        >
                            <img
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    borderRadius: "0.5rem",
                                }}
                                src={servicesImg}
                                alt="treatments-img"
                            />
                            <Box
                                sx={{
                                    width: "calc(100% - 2rem)",
                                    height: "25%",
                                    padding: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                    justifyContent: "center",
                                    position: "absolute",
                                    bottom: "5px",
                                    left: "0",
                                    background: "rgba(0, 0, 0, 0.5)",
                                    color: "#ddd",
                                    borderBottomLeftRadius: "0.5rem",
                                    borderBottomRightRadius: "0.5rem",
                                }}
                            >
                                <Typography variant="body2">
                                    BODY CONTOURING, DERMAL FILLERS, HAIR TRANSPLANT, LIPOSUCTION
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </motion.div>
        </Box>
    );
};

export default Treatments;
