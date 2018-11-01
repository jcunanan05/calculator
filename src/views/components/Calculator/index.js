import React from 'react';
import ButtonListContainer from '../../../state/Calculator/Container';
import Display from './Display';
import '../Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <Display />
    <ButtonListContainer />
  </div>
);

export default Calculator;
