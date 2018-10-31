import React from 'react';
import './Button.css';

const Button = ({ name, value, className }) => (
  <button id={name} type="button" className={`button ${className}`}>
    {value}
  </button>
);

export default Button;
