import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const SimilairExercise = ({ targetExercises, equipmentExercises,target }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Exercise that target the same group
        <Stack direction="row" sx={{ p: "2px", position: "relative" }}>
          {targetExercises?.length && (
            <ScrollMenu>
            {targetExercises?.map((item) => {
              if (item == target) {
                return (
                  <div
                    key={item.id}
                    style={{
                      width: "200px",
                      height: "100px",
                      margin: "10px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.title}
                    <span > Imad</span>
                  </div>
                );
              }else{
                console.log('1');
                
              }
              ; // Return null for items that don't match the condition
            })}
          </ScrollMenu>
          )}
        </Stack>
      </Typography>
    </Box>
  );
};

export default SimilairExercise;
