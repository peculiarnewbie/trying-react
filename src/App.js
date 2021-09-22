import React from 'react';
// Components
import Header from './components/Header';
import Home from './components/Home';
import HomeGame from './components/HomeGame';

//styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeGame />
      <GlobalStyle />
    </div>
  );
}

export default App;
