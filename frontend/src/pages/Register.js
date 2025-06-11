import React, {useState} from 'react'
import {Box,Typography, useTheme,TextField,Button, Alert,Collapse,useMediaQuery} from "@mui/material"

const Register = () => {
  const theme = useTheme()
  const isNotMobile = useMediaQuery("(min-width: 1000px)")

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      padding={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <form>
        <Typography variant="h3">Sign up</Typography>
        <TextField
          lable="username"
          required
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          lable="email"
          type="email"
          required
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          lable="password"
          type="password"
          required
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default Register