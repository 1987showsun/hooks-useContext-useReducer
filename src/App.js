/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
import React                            from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Nav                              from './components/nav';

// Pages
import Home                             from './pages/home';
import About                            from './pages/about';

// Contexts
import Store                            from './context';

// Stylesheets
import './App.css';

const App = () => {
  return (
    <Store>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" exact={false} component={About} />
        </Switch>
      </BrowserRouter>
    </Store>
  );
}

export default App;
