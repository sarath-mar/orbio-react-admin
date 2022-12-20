// import logo from './logo.svg';
import { Typography } from '@mui/material';
import './App.css';
import ResponsiveAppBar from './Components/AppBar/ResponsiveAppBar';
import MainDashboard from './Components/Dashboard/MainDashboard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: "center", backgroundColor: "#1b212d", minHeight: "100vh" }}>
        <ResponsiveAppBar  />
        
        <MainDashboard/>
      </div>
    </ThemeProvider>
  );
}

export default App;
