import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TableData from "./TableData";

export default  function RightAudtiFinding() {
  return (
    <>
      <Box sx={{ flexGrow: 1,}}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Paper elevation={3} sx={{ p: 1, pl: 3, pr: 3, pb: 6 }}>
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


