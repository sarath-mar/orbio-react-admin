import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import DashBoardLeft from './DashBoardLeft';
import DashBoardRight from './DashBoardRight';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function MainDashboard() {
    return (
        <Box sx={{ flexGrow: 1, m: 1, pt: 10 }}>
            <Grid container spacing={1}>
                <Grid xs={12} md={7}>
                    {/* <Item> */} 
                        <DashBoardLeft/>  
                    {/* </Item> */}
                </Grid>
                <Grid xs={12} md={5}>
                    <DashBoardRight/> 
                    {/* <Item>xs=4</Item> */}
                </Grid>
            </Grid>
        </Box>
    );
}