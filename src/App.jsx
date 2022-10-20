import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/QuestDesignSystemCopLightTheme';
import Home from 'src/components/Home/Home';
import Frame4 from 'src/components/Frame4/Frame4';
import Card18 from 'src/components/Card18/Card18';
import Frame7 from 'src/components/Frame7/Frame7';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="docs" element={<Frame4/>} />
          <Route path="card18" element={<Card18/>} />
          <Route path="welcome" element={<Frame7/>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;