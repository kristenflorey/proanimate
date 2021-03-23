import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects'


const App = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </>
  );
}

export default App;
