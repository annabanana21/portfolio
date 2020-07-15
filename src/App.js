import React from 'react';
import "./App.scss";
import logo from './logo.svg';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <div className="background">
      <Home />
      <Projects />
    </div>
  );
}

export default App;
