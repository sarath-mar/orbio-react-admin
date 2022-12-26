import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import PieChart from "./PieChart";
import { Stack } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#222b39" : "primary.white",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     //   height:"100%",
//     color: theme.palette.text.secondary,
// }));
function Assests() {
    let progressData = [
        {
            name: "Fixed Assests",
            price: "12345"
        },
        {
            name: "Fixed Assests",
            price: "12345"
        },
        {
            name: "Fixed Assests",
            price: "12345"
        },
        {
            name: "Fixed Assests",
            price: "12345"
        },
    ];
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12}>
                        {/* <Item>
                            <div style={{ textAlign: "center", color: "white" }}>
                                <p>Linked Products</p>
                            </div>
                        </Item> */}
                        <Paper elevation={1} sx={{ p: 1, pl: 3, pr: 3 ,pb:6 }}>
                            <div style={{ color: "primary.textColor" }}>
                                <h4>Assets / Liabilities</h4>
                            </div>
                            <Box>
                                <Grid alignItems={'center'} justifyContent={"center"} container spacing={2}>
                                    {progressData.map(data =>
                                        <Grid xs={6} >
                                            <Paper variant="circle" sx={{ bgcolor: "primary.boxShadow", p: 1, pb:2 }} elevation={0}>
                                                <h4>Fixed Assests</h4>
                                                <p> 12345</p>
                                            </Paper>
                                        </Grid>)}
                                    {/* <Grid xs={6} >2</Grid>
                                    <Grid xs={6} >1</Grid>
                                    <Grid xs={6} >2</Grid> */}
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
