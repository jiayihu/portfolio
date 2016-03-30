import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Case from './sections/Case';
import Home from './Home';

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="/project/:name" component={Case} />
        </Route>
      </Router>
    );
  }
}
