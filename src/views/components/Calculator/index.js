import React from 'react';
import Button from './Button';
import buttons from './calculatorButtons';

const Calculator = () => (
  <div className="calculator">
    <section className="display">display: 0</section>
    <section className="buttons">
      {buttons.getAllButtons().map(({ name, value, className }) => (
        <Button name={name} value={value} className={className} key={name} />
      ))}
    </section>
  </div>
);

export default Calculator;
