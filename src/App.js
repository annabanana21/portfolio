import React from 'react';
import "./App.scss";
import logo from './logo.svg';
import Hero from './components/Hero/Hero';
import Intro from './components/Intro/Intro';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Card from './components/Card/Card';


function App() {
  return (
    <div className="background">
      <Home />
      <Projects />
      <Intro />
    </div>
  );
}

export default App;
