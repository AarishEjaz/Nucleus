import React from 'react'
import {Box, Link, Typography,useTheme}  from '@mui/material'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { themeSettings } from '../theme';
import axios from "axios"
import toast from 'react-hot-toast';
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  const loggedIn = JSON.parse(localStorage.getItem('authToken'))
  // const loggedIn = localStorage.setItem("authToken", JSON.stringify('authToken'));

  const handleLogout = async() =>{
    try{
      await axios.post("http://localhost:8080/api/v1/auth/logout");
      localStorage.removeItem("authToken")
      toast.success("Logout successful")
      console.log("authToken")
      navigate('/login')

    }catch(error){
      console.log(error.message)
    }
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