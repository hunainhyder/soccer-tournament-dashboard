import { Routes, Route } from 'react-router-dom';
import Home from './scenes/Home';
import NavBar from './scenes/global/NavBar';
import TopBar from './scenes/global/Topbar';
import { Matches } from './scenes/Matches/Matches';
import Teams from './scenes/Teams/Teams';
import { Players } from './scenes/Players/Players';
import { Stats } from './scenes/Stats/Stats';
import { Groups } from './scenes/Groups/Groups';
import  { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'; 
import { JumboTron } from './scenes/global/JumboTron';
import Footer from './scenes/global/Footer';

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
            <Routes> 
              <Route path="/" element={<Home />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/players" element={<Players />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
