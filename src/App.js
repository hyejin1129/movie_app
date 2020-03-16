import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import About from './router/About';
// import {About as Potato} from './router/About';
import Home from './router/Home';
import Navigation from './component/Navigation';
import Detail from './router/Detail';

function App(){
  return (
    <BrowserRouter>
    <Navigation></Navigation>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </BrowserRouter>
  );
}

export default App;