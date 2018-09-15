import React from 'react';

const CalculatorKey = ({ character, id }) => (
  <button type="button" className="calculator__button" id={id}>
    {character}
  </button>
);

export default CalculatorKey;
