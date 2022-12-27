import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";

function Assests() {
  let progressData = [
    {
      name: "Fixed Assests",
      price: "12345",
    },
    {
      name: "Fixed Assests",
      price: "12345",
    },
    {
      name: "Fixed Assests",
      price: "12345",
    },
    {
      name: "Fixed Assests",
      price: "12345",
    },
  ];
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Paper elevation={3} sx={{ p: 1, pl: 3, pr: 3, pb: 6 }}>
              <Box sx={{ color: "primary.textColor", mb: 2, mt: 3 }}>
                <Typography variant="h7" sx={{ fontWeight: "900", p: 1 }}>
                  Assets / Liabilities
                </Typography>
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
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Assests;
