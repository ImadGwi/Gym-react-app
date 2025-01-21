import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  exrecisesOptions,
  FetchData,
  youtubeOptions,
} from "../utils/fetchDatas";
import Detail from "../components/Detail/Detail";
import ExerciseVideos from "../components/Detail/ExerciseVideos";
import SimilairExercise from "../components/Detail/SimilairExercise";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [targetExerecises, setTargetExercises] = useState([]);
  const { id } = useParams();
  let target;

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await FetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exrecisesOptions
      );

      setExerciseDetail(exerciseDetailData);


      //fetch from youtube api and it failed 403 nd 429 errors
      // const exerciseVideodata = await FetchData(
      //   `${youtubeSearchUrl}/Search?query=${exerciseDetailData.name}`,
      //   youtubeOptions
      // );
      // setExerciseVideos(exerciseVideodata.contents);

      //fetch similair exo but idk why it failed it give just an empty array

      const targetMuscleExerciseData = await FetchData(
        `${exerciseDbUrl}/exercises/target`
        //${exerciseDetailData.target}`,
        ,exrecisesOptions
      );

      setTargetExercises(targetMuscleExerciseData);
      target= exerciseDetailData.target
      console.table(targetExerecises);

      

      const equipmentMuscleExerciseData = await FetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exrecisesOptions
      );

      setEquipmentExercises(equipmentMuscleExerciseData);
    };

    fetchExerciseDetail();
  }, [id]);

  return (
    <div>
      <Box>
        <Detail exerciseDetail={exerciseDetail} />
        {/* <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        /> */}
        <SimilairExercise
          targetExerecises={targetExerecises}
          equipmentExercises={equipmentExercises}
          target={target}
        />
      </Box>
    </div>
  );
};

export default ExerciseDetail;
