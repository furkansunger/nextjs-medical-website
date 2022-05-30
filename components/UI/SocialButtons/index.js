import React, { Component } from "react";
import { Box, IconButton, Link } from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
  FaSnapchat,
} from "react-icons/fa";

const SocialButtons = ({ color, socialMedia }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {socialMedia?.length > 0
        ? socialMedia.map((item, index) => (
            <Link href={item.link} target="_blank" key={index}>
              <IconButton
                sx={{
                  color: color ? color : "#212B36",
                  "&:hover": { color: color ? color : "#212B36" },
                }}
              >
                {item.name === "Facebook" && <FaFacebook />}
                {item.name === "Twitter" && <FaTwitter />}
                {item.name === "Instagram" && <FaInstagram />}
                {item.name === "Linkedin" && <FaLinkedin />}
                {item.name === "Youtube" && <FaYoutube />}
                {item.name === "Tiktok" && <FaTiktok />}
                {item.name === "Whatsapp" && <FaWhatsapp />}
                {item.name === "Telegram" && <FaTelegram />}
                {item.name === "Snapchat" && <FaSnapchat />}
              </IconButton>
            </Link>
          ))
        : null}
    </Box>
  );
};

export default SocialButtons;
