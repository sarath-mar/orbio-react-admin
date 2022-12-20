import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import PieChart from "./PieChart";
import { Stack } from "@mui/material";
// import CircularProgress from "./CircularProgress";
import LinearProgressBar from "./LinearProgressBar";
import BarCode from "./BarCode";
import CircularStatic from "./CircularStatic";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#222b39" : "#222b39",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //   height:"100%",
  color: theme.palette.text.secondary,
}));
function DashBoardLeft() {
  let progressData = [
    { title: "Total Products", count: 1234 },
    { title: "Site 1", count: 34 },
    { title: "Site 2", count: 94 },
    { title: "Site 3", count: 34 },
  ];
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Item style={{ height: "90%" }}>
              <div style={{ color: "white" }}>
                <h4>Summary</h4>
                {/* <CircularProgress style={{backgroundColor:"red"}} ></CircularProgress>
                <CircularProgress />
                <div style={{ textAlign: "center", color: "white",display:"flex" }}>
                <CircularProgress />

                </div> */}
                <Stack
                  direction={"row"}
                 spacing={2}
                 sx={{justifyContent:"center"}}
                >
                  <CircularStatic />
                  <CircularStatic />
                  <CircularStatic />
                </Stack>
              </div>
            </Item>
          </Grid>
          <Grid xs={4}>
            <Item style={{ height: 106 }}>
              <div style={{ textAlign: "center", color: "white" }}>
                <p>No Data</p>
              </div>
            </Item>
            <Item style={{ marginTop: "16px", height: 106 }}>
              <div style={{ textAlign: "center", color: "white" }}>
                <p>No Data</p>
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
                <p>Linked Products</p>
                {progressData.map((data) => {
                  return (
                    <Grid
                      sx={{ mt: -4 }}
                      container
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid xs={2}>
                        <p style={{ textAlign: "left" }}>{data.title}</p>
                      </Grid>
                      <Grid xs={9}>
                        <LinearProgressBar />
                      </Grid>
                      <Grid xs={1}>
                        <p>{data.count}</p>
                      </Grid>
                    </Grid>
                  );
                })}
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
                <p>Linked Products</p>
                <BarCode />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashBoardLeft;
