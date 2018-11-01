import React from 'react';
import Button from '.';

export default function ButtonList({ buttons = [], onButtonClick }) {
  return (
    <section className="button-list">
      {buttons.map(({ name, value, className }) => (
        <Button
          name={name}
          value={value}
          className={className}
          key={name}
          onClick={onButtonClick}
        />
      ))}
    </section>
  );
}
