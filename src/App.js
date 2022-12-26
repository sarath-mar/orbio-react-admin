
import './App.css';
import ResponsiveAppBar from './Components/AppBar/ResponsiveAppBar';
import MainDashboard from './Components/Dashboard/MainDashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple, yellow } from '@mui/material/colors';
import { Box } from '@mui/system';
import { colors } from '@mui/material';
import Dashboard from './Components/Auditing/Dashboard/Dashboard';
// import PieSample from './Components/Test/Pie';

const theme = createTheme({
  palette: {
    primary: {
      main: "#29368e",
      white: "#ffffff",
      textColor: "#2d2d2d",
      boxShadow:'#f3f4fb'
      // main: colors.yellow[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
      // style={{ textAlign: "center", backgroundColor: "#1b212d", minHeight: "100vh" }}
      >
        <ResponsiveAppBar>
          <MainDashboard />
          {/* <Dashboard />
          <MainDashboard /> */}
        </ResponsiveAppBar>
        <Box
          component="main"
          style={{}}
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          {/* <PieSample/> */}
          {/* <Dashboard /> */}
          {/* <MainDashboard /> */}

        </Box>

      </div>
    </ThemeProvider>
  );
}

export default App;
