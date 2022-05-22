import { Box } from "@mui/material";
import Footer from "./Footer";
import Navbar from "./Navbar";
import WhatsappButton from "./WhatsappButton";

const MainLayout = ({ children }) => {
  return (
    <Box sx={{position: "relative"}}>
      <Navbar />

      {children}

      <Footer />
      <WhatsappButton />
    </Box>
  );
};

export default MainLayout;
