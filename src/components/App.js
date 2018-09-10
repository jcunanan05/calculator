import React, { Component } from 'react';
import Header from './Header';
import Calculator from './Calculator';
import '../styles/app.css';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="main section">
          <div className="container">
            <Calculator />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
