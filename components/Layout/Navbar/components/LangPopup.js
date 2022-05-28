import { useState } from "react";
import { MenuItem, Box, Popover, IconButton } from "@mui/material";

import { BsGlobe } from "react-icons/bs";

const LANGS = [
  {
    label: "English",
    value: "en",
    icon: "https://cdn-icons-png.flaticon.com/512/197/197374.png",
  },
  {
    label: "Turkish",
    value: "tr",
    icon: "https://img.icons8.com/color/96/000000/turkey.png",
  },
];

export default function LangPopup() {
  const [currentLang, setCurrentLang] = useState("en");

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeLang = (newLang) => {
    handleClose();
    setCurrentLang(newLang);
  };

  return (
    <>
      <IconButton
        sx={{
          background: "#005c71",
          color: "#fff",
          "&:hover": { background: "#005c71" },
          marginRight: "1.5rem",
        }}
        onClick={handleOpen}
      >
        <BsGlobe />
      </IconButton>
      <Popover
        open={Boolean(open)}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: { px: 1, width: 220 },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang}
            onClick={() => handleChangeLang(option.value)}
            sx={{ my: 1 }}
          >
            <Box
              component="img"
              alt={option.label}
              src={option.icon}
              sx={{
                borderRadius: "50%",
                width: 28,
                height: 28,
                objectFit: "cover",
                mr: 1,
              }}
            />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
