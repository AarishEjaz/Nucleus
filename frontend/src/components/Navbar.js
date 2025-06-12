import React from 'react'
import {Box, Link, Typography,useTheme}  from '@mui/material'
import { NavLink } from 'react-router-dom';
import { themeSettings } from '../theme';
const Navbar = () => {
  const theme = useTheme();
  const loggedIn = JSON.parse(localStorage.getItem('authToken'))

  const handleLogout = async() =>{

  }
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem "
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
      <Typography variant="h1" color="primary" fontWeight={"bold"}>
        Nucleus
      </Typography>

      {loggedIn ? (
        <Link href="/login" onClick={handleLogout} p={1}>
          Logout
        </Link>
      ) : (
        <>
                <Link href="/register" p={1}>
          Sign Up
        </Link>
        <Link href="/login" p={1}>
          Sign In
        </Link>
        </>

      )}
    </Box>
  );
}

export default Navbar