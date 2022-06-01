import { Button } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showScroll && (
        <Button
          onClick={scrollUp}
          sx={{
            position: "fixed",
            bottom: "100px",
            right: "35px",
            height: "50px",
            width: "50px",
            lineHeight: "50px",
            fontSize: "50px",
            zIndex: "100000",
          }}
        >
          ^
        </Button>
      )}
    </div>
  );
};

export default ScrollTopButton;
