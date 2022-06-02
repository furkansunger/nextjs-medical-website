import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

export default function NextImage({
  sx = {},
  src,
  width = "100%",
  height = "100%",
  objectFit = "contain",
  imageStyle = {},
  spanStyle = {},
  imageProps = {},
}) {
  return (
    <Box
      className="imageCover"
      sx={{
        ...sx,
        position: "relative",
        width: width,
        height: height,
        "& >span > img": { ...imageStyle },
        "& >span ": { ...spanStyle },
      }}
    >
      <Image src={src} {...imageProps} layout="fill" objectFit={objectFit} />
    </Box>
  );
}
