import { Routes, Route } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import NavBar from './scenes/global/NavBar';
import TopBar from './scenes/global/TopBar';
// import Matches from './scenes/Matches';
// import Teams from './scenes/Teams';
// import Players from './scenes/Players';
// import Stats from './scenes/Stats';
// import Groups from './scenes/Groups';
import  { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'; 
import PlayerCard from './scenes/Teams/Teams';
import playerData from './data/playersData'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <main className='content'>
            <TopBar />
            <NavBar />
            <PlayerCard player={playerData[0]} />
            {/* <Routes> */}
              {/* <Route path="/" element={<Dashboard />} /> */}
              {/* <Route path="/matches" element={<Matches />} /> */}
              {/* <Route path="/groups" element={<Groups />} /> */}
              {/* <Route path="/stats" element={<Stats />} /> */}
              {/* <Route path="/teams" element={<Teams />} /> */}
              {/* <Route path="/players" element={<Players />} /> */}
            {/* </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
