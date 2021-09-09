
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
//Calling WOWjs
import WOW from 'wowjs';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
