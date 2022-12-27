import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";
import PieChartNew from "./PieChartNew";
import RevenuePie from "./RevenuePie";

import "./Dashboard.css";
function Revenue() {
  let progressData = [
    {
      name: "Total Turn Over",
      price: "12345",
    },
    {
      name: "Net Profit",
      price: "12345",
    },
  ];
  let progressContentData = [
    {
      name: "Total Purchase :",
      price: "12345",
    },
    {
      name: "Total Direct Expenses :",
      price: "12345",
    },
    {
      name: "Total Indirect Expenses :",
      price: "12345",
    },
    {
      name: "Change in Stock :",
      price: "12345",
    },
  ];
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Paper elevation={1} sx={{ p: 1, pl: 3, pr: 3, pb: 6 }}>
              <Box
                sx={{
                  color: "primary.textColor",
                  mb: 2,
                  mt: 3,
                }}
              >
                <Typography variant="h7" sx={{ fontWeight: "900", p: 1 }}>
                  Revenue
                </Typography>
                {/* <Button
                  sx={{
                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "primary.white",
                    },
                    bgcolor: "primary.white",
                    color: "primary.main",
                    borderRadius: 6,
                    fontWeight: "700",
                  }}
                  variant="outlined"
                  size="small"
                >
                  View All
                </Button> */}
              </Box>
              <Box>
                <Grid
                  alignItems={"center"}
                  justifyContent={"center"}
                  container
                  spacing={2}
                >
                  {progressData.map((data) => (
                    <Grid xs={12} sm={6}>
                      <Paper
                        variant="circle"
                        sx={{
                          bgcolor: "primary.boxShadow",
                          p: 3,
                          pb: 4,
                          pt: 1,
                          borderRadius: 3,
                        }}
                        elevation={0}
                      >
                        <Typography variant="h6" sx={{ fontWeight: "500" }}>
                          {data.name}
                        </Typography>
                        <Typography
                          sx={{ color: "primary.main", fontWeight: "700" }}
                        >
                          {data.price}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              <Box sx={{ mt: 6 }}>
                <RevenuePie />
              </Box>
              <Box sx={{ mt: 8 }}>
                {progressContentData.map((x) => (
                  <Box
                    className="revenu-loop"
                    sx={{
                      mt: 4,
                    }}
                  >
                    <Grid container spacing={{xs: 1, sm: 4}} columnSpacing={3}>
                      <Grid xs={12} sm={7}>
                        <Typography sx={{ fontWeight: "700" }}>
                          {" "}
                          {x.name}
                        </Typography>
                      </Grid>
                      <Grid xs={12} sm={5}>
                        <Typography>{`Rs ${x.price}`}</Typography>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Revenue;