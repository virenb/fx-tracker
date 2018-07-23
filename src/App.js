import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Current from './components/Current';
import History from './components/History';

const App = () => (
  <Router>
    <div>
      <Nav />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Current} />
          <Route path="/history" component={History} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
