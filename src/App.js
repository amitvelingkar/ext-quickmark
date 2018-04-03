import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from './_helpers';
import { PrivateRoute } from './_components';
import { LoginPage, HomePage } from './Pages';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
          <div>
            <Route path="/" component={LoginPage} />
            <PrivateRoute path="/team" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </div>
      </Router>
    );
  }
}

export default App;
