import React from 'react';
import CalculatorKeys from '../containers/CalculatorKeys';
import DisplayFormula from '../containers/DisplayFormula';
import Result from '../containers/Result';

/* eslint-disable react/no-array-index-key */
const Calculator = () => (
  <section className="calculator">
    <div className="calculator__display">
      <section className="calculator__formula">
        <DisplayFormula />
      </section>

      <section className="calculator__result">
        <Result />
      </section>
    </div>

    <div className="calculator__body">
      <CalculatorKeys />
    </div>
  </section>
);

export default Calculator;
