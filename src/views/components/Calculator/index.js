import React from 'react';
import ButtonList from './ButtonList';
import Display from './Display';
import '../Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <Display />
    <ButtonList />
  </div>
);

export default Calculator;
