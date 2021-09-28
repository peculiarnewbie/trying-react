import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header';
import Home from './components/Home';
import HomeGame from './components/HomeGame';
import Game from './components/Game';
import NotFound from './components/NotFound';

//styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomeGame />} />
        <Route path='/:gameId' element={<Game />} /> 
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
);

export default App;
