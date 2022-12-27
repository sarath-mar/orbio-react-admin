import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";
import PieChartNew from "./PieChartNew";
export default function TopExpenses() {
 
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
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h7" sx={{ fontWeight: "900", p: 1 }}>
                  Top 5 Expenses
                </Typography>
                <Button
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
                </Button>
              </Box>
              <Box>
                <PieChartNew />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
