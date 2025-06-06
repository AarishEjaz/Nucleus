import React from 'react'
import {Box, Link, Typography,useTheme}  from '@mui/material'
import { NavLink } from 'react-router-dom';
import { themeSettings } from '../theme';
const Navbar = () => {
  const theme = useTheme();
  return (

    <Box
      width={"100%"}
      backgroundColor = {theme.palette.background.alt}
      p="1rem "
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color= "primary" fontWeight={"bold"}>
        Nucleus
      </Typography>
      <Link href="/register" p={1}>
        Sign Up
      </Link>
      <Link href="/login" p={1}>
        Sign In
      </Link>
    </Box>
  );
}

export default Navbar