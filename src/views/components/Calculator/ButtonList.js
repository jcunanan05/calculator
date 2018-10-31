import React from 'react';
import Button from './Button';
import buttons from './calculatorButtons';

export default function ButtonList() {
  return (
    <section className="button-list">
      {buttons.getAllButtons().map(({ name, value, className }) => (
        <Button name={name} value={value} className={className} key={name} />
      ))}
    </section>
  );
}
