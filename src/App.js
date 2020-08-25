import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./App.scss";
import Intro from './components/Intro/Intro';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import VideosPage from './components/VideosPage/VideosPage';
import MidLine from './components/MidLine/MidLine';


function Main() {
  return (
    <div className="background">
      <Home />
      <Intro />
      <MidLine />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/videos' component={VideosPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
