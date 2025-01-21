import { Box } from "@mui/material";
import React, { useState } from "react";
import SearchExercices from "../components/Home/SearchExercices";
import Exercices from "../components/Home/Exercices";
import HeroBanner from "../components/Home/Herobanner";
// import bodyPart from "../components/Home/bodyPart";

const Home = () => {
  const [exos, setExos] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercices
        setExos={setExos}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercices exos={exos} setExos={setExos} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
