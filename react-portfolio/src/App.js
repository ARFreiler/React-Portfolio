import React from 'react';

import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
// import Navbar from './components/Navbar';
// import Body from './components/Body';
// import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Header />
      <Portfolio />
      {/* <AboutMe /> */}
      <Footer />
    </div>
  );
}

export default App;
