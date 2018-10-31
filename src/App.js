import React from 'react';
import Header from './views/components/Header';
import Calculator from './views/components/Calculator';

import './views/App.css';

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
