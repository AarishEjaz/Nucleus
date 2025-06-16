import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Summary from "./pages/summary";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import toast, { Toaster } from "react-hot-toast";
// import {Docs, Js} from './custom-requests/documentation';
import {Docs, Js, Brother}from './custom-requests/request-index';
import Paragraph from './custom-requests/paragraph';
function App() {
  const theme = useMemo(()=> createTheme(themeSettings(),[]))
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/js-conversion" element={<Js />} />
          <Route path="/brother" element={<Brother />} />
          <Route path = "/paragraph-generation" element={<Paragraph />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
