import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Current from './components/Current';
import History from './components/History';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Current} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
