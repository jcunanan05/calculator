import React from 'react';
import CalculatorKey from './CalculatorKey';
import calculatorKeyList from '../calculatorKeyList';

const Calculator = () => (
  <section className="calculator">
    <div className="calculator__display">
      <section className="calculator__formula">
        <h2 className="title is-5">One + One</h2>
      </section>

      <section className="calculator__result">
        <h2 className="title">9</h2>
      </section>
    </div>

    <div className="calculator__body">
      {calculatorKeyList.map((calculatorKey) => (
        <CalculatorKey key={calculatorKey} character={calculatorKey} />
      ))}
    </div>
  </section>
);

export default Calculator;
