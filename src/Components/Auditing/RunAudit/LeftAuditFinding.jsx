import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DropDown from "./DropDown";
export default function LeftAudtiFinding() {
//   let progressData = [
//     {
//       name: "Fixed Assests",
//       price: "12345",
//     },
//     {
//       name: "Fixed Assests",
//       price: "12345",
//     },
//     {
//       name: "Fixed Assests",
//       price: "12345",
//     },
//     {
//       name: "Fixed Assests",
//       price: "12345",
//     },
//   ];
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Paper elevation={3} sx={{ p: 1, pl: 3, pr: 3, pb: 6 }}>
              <Box
                sx={{
                  color: "primary.textColor",
                  mb: 2,
                  mt: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h7" sx={{ fontWeight: "900", p: 1 }}>
                  Suspected Errors
                </Typography>
                <MoreVertIcon />
              </Box>
              <Box>
                <DropDown />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
