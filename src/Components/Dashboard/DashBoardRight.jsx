import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#222b39",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function DashBoardRight() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Item>
              <div style={{ textAlign: "center", color: "white" }}>
                <h4>Summary</h4>
                <PieChart />
              </div>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              <div style={{ textAlign: "center", color: "white" }}>
                <h4>Products</h4>
                <PieChart />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Item>
              <div style={{ textAlign: "center", color: "white" }}>
                <h4>Price Variance</h4>
                <LineChart />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Item style={{ height: "140px" }}>
              <div style={{ textAlign: "center", color: "white" }}>
                <h4>No Data</h4>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashBoardRight;
