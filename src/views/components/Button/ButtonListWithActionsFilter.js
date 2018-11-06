import React from 'react';
import Button from '.';

// const noOp = () => {};

export default function ButtonListWithActionsFilter({ buttons = [], actions }) {
  const { updateValue, putDecimal } = actions;
  return (
    <section className="button-list">
      {buttons.map(props => {
        const { name } = props;
        if (props.name === 'decimal') {
          return <Button key={name} {...props} onClick={putDecimal} />;
        }

        return <Button key={name} {...props} onClick={updateValue} />;
      })}
    </section>
  );
}
