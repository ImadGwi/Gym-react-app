import { Box, Stack, Typography } from "@mui/material";

import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { FetchData, exrecisesOptions } from "../../utils/fetchDatas";
import ExerciseCard from "./ExerciseCard";
import { exrecisesOptions, FetchData } from "../../utils/fetchDatas";

const Exercices = ({ exos, setExos, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exosPerPage = 4;

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  //this useeffect is used to dislay some exrcice after clickking on its card from home page
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exrecisesData = [];

      if (bodyPart === "all") {
        exrecisesData = await FetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exrecisesOptions
        );
      } else {
        exrecisesData = await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/${bodyPart}`,
          exrecisesOptions
        );
      }
      setExos(exrecisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  const indexOfLastExos = currentPage * exosPerPage;
  const indexOfFirstExos = indexOfLastExos - exosPerPage;

  const currentExo = Array.isArray(exos)
    ? exos.slice(indexOfFirstExos, indexOfLastExos)
    : [];
  return (
    <Box id="exercices" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Result
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexwrap="wrap"
        justifycontenet="center"
      >
        {currentExo.map((exo, index) => {
          return <ExerciseCard key={index} exo={exo} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exos.length > exosPerPage && (
          //This Code Must be Revised
          //after revised it used to dispaly number of pag during navigation
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            variant="text"
            count={Math.ceil(exos.length / exosPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            showFirstButton
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercices;
