import { Button } from '@mui/material'
import React from 'react'
import whatsappImg from "../../../public/assets/whatsapp.svg";
import Image from 'next/image'

const WhatsappButton = () => {
  return (
    <Button sx={{
        width: "64px",
        height: "64px",
        position: "fixed",
        bottom: "30px",
        right: "30px",
        "&:hover": {
            background: "transparent"
        }
    }} href="https://wa.me/905551234567" target="_blank">
      <Image src="/assets/whatsapp.svg" alt="whatsapp" layout="fill" />
        {/* <img style={{width: "100%", height: "100%"}} src={whatsappImg} alt="whatsapp" /> */}
    </Button>
  )
}

export default WhatsappButton