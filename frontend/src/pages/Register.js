import React, {useState} from 'react'
import {Box,Typography, useTheme,TextField,Button, Alert,Collapse,useMediaQuery} from "@mui/material"
import { Link } from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'

const Register = () => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery("(min-width: 1000px)")

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault()
    try{

    }catch(error){
      console.log(error.message)
    }
  }
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      padding={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Sign up</Typography>
        <TextField
          label="username"
          required
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="email"
          type="email"
          required
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="password"
          type="password"
          required
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant='contained' size="large" sx={{color:"white", mt:2}}>SignUp</Button>
        <Typography mt={2}>
          Already have an account? <Link to="/login">Please Login </Link>
        </Typography>
      </form>
    </Box>
  );
}

export default Register