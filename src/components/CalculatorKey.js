import React from 'react';

const CalculatorKey = ({ character }) => (
  <button type="button" className="calculator__button">
    {character}
  </button>
);

export default CalculatorKey;
