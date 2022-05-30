import { useState } from "react";
import { MenuItem, Box, Popover, IconButton } from "@mui/material";

import { BsGlobe } from "react-icons/bs";

import i18nConfig from "../../../../i18n.json";

import {useRouter} from "next/router"

const {locales, defaultLocale } = i18nConfig;

import useTranslation from 'next-translate/useTranslation'


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
  const { t, lang } = useTranslation()

  const [currentLang, setCurrentLang] = useState(t(`common:language-name-${lang}`));

  const router = useRouter();

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleChangeLang = (newLang) => {
    const lang = newLang === defaultLocale ? "" : newLang;

    handleClose();
    setCurrentLang(newLang);
    router.push(`/${lang}`, null, {
      locale: newLang
    });
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

        {locales.map((lng, index) => (
          <MenuItem
            key={index}
            selected={lng === currentLang}
            onClick={() => handleChangeLang(lng)}
            sx={{ my: 1 }}
          >
            <Box
              component="img"
              alt={lng}
              src={lng === "en" ? "https://cdn-icons-png.flaticon.com/512/197/197374.png" : "https://img.icons8.com/color/96/000000/turkey.png"}
              sx={{
                borderRadius: "50%",
                width: 28,
                height: 28,
                objectFit: "cover",
                mr: 1,
              }}
            />

            {t(`common:language-name-${lng}`)}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
