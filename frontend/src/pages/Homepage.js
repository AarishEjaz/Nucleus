import React from 'react'
import{Box, Typography, Card, Stack} from "@mui/material"
import { useNavigate } from 'react-router-dom'
// import DescriptionRounded form "@mui/icons-material/DescriptionRounded"
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignCenterOutlined from "@mui/icons-material/FormatAlignCenterOutlined";
import toast from 'react-hot-toast'


const  Homepage = () => {
    const loggedIn = JSON.parse(localStorage.getItem("authToken"));
    const handleClick = () =>{
      if(loggedIn){
        toast.success("User is Logged in ");
      }else{
        toast.success("Login/Register first");
        navigate('/login')
      }
    }
  const navigate = useNavigate()
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box p={2} onClick={handleClick}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Text Generation
          </Typography>
          <Card
            onClick={() => navigate("/summary")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                TEXT SUMMARY
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                Summarize long text into short sentence
              </Typography>
            </Stack>
          </Card>
        </Box>
        <Box p={2} onClick={handleClick}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Paragraph Generation
          </Typography>
          <Card
            onClick={() => navigate("/paragraph-generation")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <FormatAlignCenterOutlined
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Paragraph
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                Generate paragraph with words
              </Typography>
            </Stack>
          </Card>
        </Box>
        {/* docs */}
        <Box p={2} onClick={handleClick}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Documentation Summary
          </Typography>
          <Card
            onClick={() => navigate("/Docs")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Documentations
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                Generate short notes of the technology you are working on with
                the help of it's official documentation
              </Typography>
            </Stack>
          </Card>
        </Box>
        {/* javascript conversion */}
        <Box p={2} onClick={handleClick}>
          <Typography variant="h4" mb={2} fontWeight="bold">
             Javascript tool
          </Typography>
          <Card
            onClick={() => navigate("/js-conversion")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Javascript conversion
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                Convert any code to it's equivalent javascript code
              </Typography>
            </Stack>
          </Card>
        </Box>
        {/* A friend */}
        <Box p={2} onClick={handleClick}>
          <Typography variant="h4" mb={2} fontWeight="bold">
            Friend Tool
          </Typography>
          <Card
            onClick={() => navigate("/Brother")}
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              height: 190,
              width: 200,
              "&:hover": {
                border: 2,
                boxShadow: 0,
                borderColor: "primary.dark",
                cursor: "pointer",
              },
            }}
          >
            <DescriptionRounded
              sx={{ fontSize: "80", color: "primary.main", mt: 2, ml: 2 }}
            />
            <Stack p={3} pt={0}>
              <Typography fontWeight="bold" variant="h5">
                Find a friend here
              </Typography>
              <Typography fontWeight="bold" variant="h6">
                Tell your friend what's on your mind and have a chat
              </Typography>
            </Stack>
          </Card>
        </Box>

      </Box>
    </>
  );
}

export default  Homepage