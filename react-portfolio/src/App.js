import React from 'react';

import './App.css';
// import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
// import Navbar from './components/Navbar';


function App() {

  return (
    <div>
      <Header />
      {/* <AboutMe /> */}
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
