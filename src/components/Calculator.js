import React from 'react';
import CalculatorKey from './CalculatorKey';
import calculatorKeyList from '../calculatorKeyList';

/* eslint-disable react/no-array-index-key */
function renderKeys() {
  return calculatorKeyList.map((calculatorKey, i) => (
    <CalculatorKey key={i} character={calculatorKey} />
  ));
}

const Calculator = () => (
  <section className="calculator">
    <div className="calculator__display">
      <section className="calculator__formula">
        <h2 className="title is-5">1 + 1</h2>
      </section>

      <section className="calculator__result">
        <h2 className="title is-1">9</h2>
      </section>
    </div>

    <div className="calculator__body">{renderKeys()}</div>
  </section>
);

export default Calculator;
