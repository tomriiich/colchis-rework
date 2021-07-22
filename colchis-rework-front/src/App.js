import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Family from './components/Family';
import Assets from './components/Assets';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/family" exact component={Family} />
      <Route path="/assets" exact component={Assets} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
