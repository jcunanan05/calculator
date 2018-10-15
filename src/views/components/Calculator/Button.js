import React from 'react';

const Button = ({ name, value, className }) => (
  <button id={name} type="button" className={`button ${className}`}>
    {value}
  </button>
);

export default Button;
