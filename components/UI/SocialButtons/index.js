import React from "react";
import { Box, IconButton, Link } from "@mui/material";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialButtons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="https://www.facebook.com/draykutgok" target="_blank">
        <IconButton sx={{ color: "#212B36", "&:hover": { color: "#212B36" } }}>
          <FaFacebookF />
        </IconButton>
      </Link>

      <Link href="https://twitter.com/mdaykutgok" target="_blank">
        <IconButton sx={{ color: "#212B36", "&:hover": { color: "#212B36" } }}>
          <FaTwitter />
        </IconButton>
      </Link>
      <Link href="https://instagram.com/draykutgok" target="_blank">
        <IconButton sx={{ color: "#212B36", "&:hover": { color: "#212B36" } }}>
          <FaInstagram />
        </IconButton>
      </Link>
      <Link href="https://www.linkedin.com/in/aykutgok/" target="_blank">
        <IconButton sx={{ color: "#212B36", "&:hover": { color: "#212B36" } }}>
          <FaLinkedinIn />
        </IconButton>
      </Link>
      <Link href="https://youtube.com/c/wellesclinic" target="_blank">
        <IconButton sx={{ color: "#212B36", "&:hover": { color: "#212B36" } }}>
          <FaYoutube />
        </IconButton>
      </Link>
    </Box>
  );
};

export default SocialButtons;
