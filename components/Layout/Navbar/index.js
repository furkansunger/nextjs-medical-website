import {
  AppBar,
  Box,
  IconButton,
  Link,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        (isScrolled && window.scrollY < 96) ||
        (!isScrolled && window.scrollY >= 96)
      ) {
        if (window.scrollY >= 96) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: isScrolled
          ? "rgba(256, 256, 256, 0.9)"
          : "transparent",
        transition: "background-color 0.5s ease",
        width: "100%",
        padding: { sm: "1rem 4rem", xs: "1rem" },
        boxShadow: isScrolled
          ? "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
          : "none",
      }}
      position="fixed"
    >
      <Box
        sx={{
          width: { sm: "calc(30% - 0rem)", xs: "calc(100% - 0rem)" },
          height: { sm: "calc(100vh - 0rem)", xs: "calc(100vh - 0rem)" },
          padding: { sm: "2rem", xs: "1rem" },
          zIndex: "999",
          backgroundColor: "#fff",
          transition: "all 0.25s linear",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      >
        <IconButton
          onClick={() => handleMenu()}
          sx={{
            position: "absolute",
            top: "35px",
            right: "65px",
          }}
        >
          <MdCancel />
        </IconButton>
        <Box
          sx={{
            width: "70%",
            margin: "2rem auto 0 auto",
          }}
        >
          <MenuItem
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#000",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem!important" }}>Home</Typography>
          </MenuItem>
          <MenuItem
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#000",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem!important" }}>Home</Typography>
          </MenuItem>
          <MenuItem
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#000",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem!important" }}>Home</Typography>
          </MenuItem>
          <MenuItem
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#000",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem!important" }}>Home</Typography>
          </MenuItem>
          <MenuItem
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#000",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem!important" }}>Home</Typography>
          </MenuItem>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Link href="tel:+90 532 419 88 68">+90 532 419 88 68</Link>
            <Link href="mailto:info@aykutgok.com">info@aykutgok.com</Link>
          </Box>
          <Box>
            <Link href="https://www.facebook.com/draykutgok" target="_blank">
              <IconButton>
                <FaFacebookF />
              </IconButton>
            </Link>
            <Link href="https://twitter.com/mdaykutgok" target="_blank">
              <IconButton>
                <FaTwitter />
              </IconButton>
            </Link>
            <Link href="https://instagram.com/draykutgok" target="_blank">
              <IconButton>
                <FaInstagram />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/aykutgok/" target="_blank">
              <IconButton>
                <FaLinkedinIn />
              </IconButton>
            </Link>
            <Link href="https://youtube.com/c/wellesclinic" target="_blank">
              <IconButton>
                <FaYoutube />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>
      <Toolbar
        sx={{
          width: "100%",
          padding: "0!important",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          sx={{ width: { sm: "16rem", xs: "12rem" } }}
          href="/"
          underline="none"
        >
          <img
            style={{ width: "100%" }}
            src="https://aykutgok.com/wp-content/uploads/2021/06/Add-a-heading.svg"
            alt="logo"
          />
        </Link>
        <IconButton
          sx={{
            background: "#385399",
            color: "#fff",
            "&:hover": { background: "#385399" },
          }}
          onClick={() => handleMenu()}
        >
          <AiOutlineMenu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
