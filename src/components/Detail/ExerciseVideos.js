import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ exerciseVideo, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        {" "}
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise Video
      </Typography>

      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {/* Here i have big problem with api fetching 
        it give me undfind but idk why  status 403 and 429 whitch mmean forbbiden and */}
        {exerciseVideo?.slice(0, 3).map((item, index) => (
            <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            >
                {console.log('iiii')
                }
            <span > Imad</span>
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
