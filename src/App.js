import React from 'react';
import Navbar from "./component/navBar/navbar";
import Home from './containers/home/home';
import About from './containers/about/about';
import Skills from './containers/skills/skills';
import Contact from './containers/contact/contact';
import Portfolio from './containers/portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;