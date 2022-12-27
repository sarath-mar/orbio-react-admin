
import './App.css';
import ResponsiveAppBar from './Components/AppBar/ResponsiveAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, } from '@mui/material/colors';

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
          {/* <MainDashboard /> */}
          {/* <Dashboard />
          <MainDashboard /> */}
        </ResponsiveAppBar>

      </div>
    </ThemeProvider>
  );
}

export default App;
