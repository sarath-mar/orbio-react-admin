import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import TableData from "./TableData";

export default  function RightAudtiFinding() {
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
      <Box sx={{ flexGrow: 1,}}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Paper elevation={3} sx={{ p: 1, pl: 3, pr: 3, pb: 6 }}>
              {/* <Box sx={{ color: "primary.textColor", mb: 2, mt: 3 }}>
                <Typography variant="h7" sx={{ fontWeight: "900", p: 1 }}>
                  Assets / Liabilities.
                </Typography>
              </Box> */}
              <Box>
               <TableData/>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}


