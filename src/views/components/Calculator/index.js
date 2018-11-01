import React from 'react';
import ButtonListContainer from '../../../state/Calculator/ButtonListContainer';
import DisplayContainer from '../../../state/Calculator/DisplayContainer';
import '../Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <DisplayContainer />
    <ButtonListContainer />
  </div>
);

export default Calculator;
