// Imports
import React from 'react';
import './global/global.css';
//Components
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import MapGoogle from './components/MapGoogle/map';

function App() {
  return (
    <div className="App">
      <Header />
      <MapGoogle />
      <Footer />
    </div>

  );
}

export default App;
