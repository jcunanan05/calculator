import React, { Component } from 'react';
import Header from './views/components/Header';
import Calculator from './views/components/Calculator';

import './views/App.css';

/* eslint-disable react/prefer-stateless-function */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header value="Calculator!" />
        <main className="section">
          <div className="container">
            <Calculator />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
