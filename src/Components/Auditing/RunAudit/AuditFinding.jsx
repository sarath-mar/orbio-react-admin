import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import LeftAudtiFinding from "./LeftAuditFinding";
import RightAudtiFinding from "./RightAuditFindig";

function AuditFinding(props) {
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={3}>
          <LeftAudtiFinding />
        </Grid>
        <Grid xs={12} md={9}>
          <RightAudtiFinding />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AuditFinding;
