import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ColchisLogo from './components/ColchisLogo';
import Navbar from './components/Navbar';
import About from './components/About';
import Family from './components/Family';
import Assets from './components/Assets';
import Contact from './components/Contact';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <ColchisLogo />
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/family" exact component={Family} />
          <Route path="/assets" exact component={Assets} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
