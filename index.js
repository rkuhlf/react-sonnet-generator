import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-dom';
import Home from './Pages/Home';
import './style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route>
          <Home />
        </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
