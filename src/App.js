import React from 'react';
import {HashRouter, Route } from 'react-router-dom';
import About from './router/About';
// import {About as Potato} from './router/About';
import Home from './router/Home';
import Navigation from './component/Navigation';

function App(){
  return (
    <HashRouter>
    <Navigation></Navigation>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
  );
}

export default App;