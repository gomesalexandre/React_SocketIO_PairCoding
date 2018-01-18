import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import App from './App';
import Home from './Components/Home';
import Room from './Components/Room';

export default () => (
  <Router>
    <Route path="/" component={App}>
      <Route path="/rooms:room" component={Room}/>
    </Route>
  </Router>
);
