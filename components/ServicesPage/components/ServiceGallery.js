import { useState } from "react";
// @mui
import { Box } from "@mui/material";
import LightboxModal from "./LightboxModal";

const gallery = [
  "https://zone-assets-api.vercel.app/assets/images/travel/travel_3.jpg",
  "https://zone-assets-api.vercel.app/assets/images/travel/travel_4.jpg",
  "https://zone-assets-api.vercel.app/assets/images/travel/travel_5.jpg",
  "https://zone-assets-api.vercel.app/assets/images/travel/travel_6.jpg",
  "https://zone-assets-api.vercel.app/assets/images/travel/travel_7.jpg",
];

export default function ServiceGallery() {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpenLightbox = (url) => {
    const selectedImage = gallery.findIndex((index) => url === index);

    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <Box sx={{ padding: "2rem 0" }}>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          },
        }}
      >
        <PhotoItem
          photo={gallery[0]}
          onOpenLightbox={() => handleOpenLightbox(gallery[0])}
        />

        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {gallery.slice(1, 5).map((photo) => (
            <PhotoItem
              key={photo}
              photo={photo}
              onOpenLightbox={() => handleOpenLightbox(photo)}
            />
          ))}
        </Box>
      </Box>

      <LightboxModal
        images={gallery}
        mainSrc={gallery[selectedImage]}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onCloseRequest={() => setOpenLightbox(false)}
      />
    </Box>
  );
}

function PhotoItem({ photo, onOpenLightbox }) {
  return (
    <Box sx={{ "&:hover": { opacity: "0.8" }, transition: "0.4s" }}>
      <Box
        component="img"
        alt="photo"
        src={photo}
        onClick={onOpenLightbox}
        sx={{ borderRadius: 2, cursor: "pointer", width: "100%" }}
      />
    </Box>
  );
}
