import { React, useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
//text field == input text
// /typography == text
import { FetchData, exrecisesOptions } from "../../utils/fetchDatas";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercices = ({ setExos, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exrecisesOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exrecisesData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exrecisesOptions
      );

      const SearchExercices = exrecisesData.filter(
        (exo) =>
          exo.name.toLowerCase().includes(search) ||
          exo.target.toLowerCase().includes(search) ||
          exo.equipment.toLowerCase().includes(search) ||
          exo.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExos(SearchExercices);
    }
  };

  return (
    <Stack alignItems={"center"} mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontsize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign={"center"}
      >
        Awesome Exrcises You sould Know <br />
      </Typography>

      <Box position={"relative"} mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            background: "#fff",
            borderRadius: "40px",
            mr: "10px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercise"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontsize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          p: "2px",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercices;
