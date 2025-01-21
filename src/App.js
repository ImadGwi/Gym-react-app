import "./App.css"; //rafce
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import NavBar from "./components/NavBar";
import Home from "./Pages/Home";

import Footer from "./components/Footer";
import ExerciseDetail from "./Pages/ExerciseDetail";

function App() {
  return (
    <Box>
      {/* sx for responsive and m for margin*/}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exo/:id" element={<ExerciseDetail />} />
        {/* this ":id" say that the id will be dynamic */}
      </Routes>
      <Footer />
    </Box>
  );
} //02:15:00

export default App;
