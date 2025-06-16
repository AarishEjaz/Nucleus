import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
  Card
} from "@mui/material";

const Paragraph = () =>{

      const theme = useTheme();
      const navigate = useNavigate();
      //media
      const isNotMobile = useMediaQuery("(min-width: 1000px)");

    const[para, setPara] = useState("")
    const[error, setError] = useState("")
    const[text, setText] = useState("")



    const handleSubmit =async()=>{
        try{
            const { data } = await axios.post(
              "https://nucleus-backend-udz6.onrender.com/api/v1/gemini/paragraph", {text}
            );
            setPara(data.message)
        }catch(err){
                  if (err.response.data.error) {
                    setError(err.response.data.error);
                  } else if (err.message) {
                    setError(err.message);
                  }
                  setTimeout(() => {
                    setError("");
                  }, 5000);
        }
    }








    return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Summarise text</Typography>

        <TextField
          label="Enter the word"
          type="text"
          required
          margin="normal"
          fullWidth
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
        >
          Generate paragraph
        </Button>
        <Typography mt={2}>
          Not this tool ? <Link to="/">GO BACK</Link>
        </Typography>
      </form>


      {para ? (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            backgroundColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography>{para}</Typography>
        </Card>
      ) : (
        <Card
          sx={{
            mt: 4,
            border: 1,
            boxShadow: 0,
            height: "500px",
            borderRadius: 5,
            backgroundColor: "natural.medium",
            bgcolor: "background.default",
          }}
        >
          <Typography variant="h5" color="natural.main" sx={{textAlign:'center', verticalAlign:"middel",lineHeight:"450px"}}>Paragraph will appear here</Typography>
        </Card>
      )}
    </Box>
  );
};


export default Paragraph;