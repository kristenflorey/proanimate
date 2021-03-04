import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';


const App = () => {
  return (
    <>
      <h1>Stay tuned...</h1>
      <Navigation />
    </>
  );
}

export default App;
