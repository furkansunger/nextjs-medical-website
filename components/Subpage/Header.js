import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box sx={{
        width: {sm: "calc(100% - 8rem)", xs: "calc(100% - 2rem)"},
        padding: {sm: "4rem", xs: "3rem 1rem"},
        borderBottom: "8px solid cadetblue",
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <Typography variant="h4" sx={{color: "#ddd"}}>Subpage Title</Typography>
    </Box>
  )
}

export default Header