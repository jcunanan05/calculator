import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import '../styles/app.css';

const App = () => (
  <div className="App">
    <Header />
    <main className="section">
      <div className="container">
        <Calculator />
      </div>
    </main>
  </div>
);

export default App;
