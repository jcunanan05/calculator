import React, { Component } from 'react';
import Button from '.';

// const noOp = () => {};

export default class ButtonListWithActionsFilter extends Component {
  renderButtons = () => {
    const { buttons, actions } = this.props;
    const { updateValue, putDecimal, clearValue, reverseSign } = actions;
    return buttons.map(props => {
      const { name, className } = props;
      if (name === 'decimal') {
        return <Button key={name} {...props} onClick={putDecimal} />;
      }

      if (name === 'clear') {
        return <Button key={name} {...props} onClick={clearValue} />;
      }

      if (className.includes('number')) {
        return <Button key={name} {...props} onClick={updateValue} />;
      }

      if (name === 'polarity') {
        return <Button key={name} {...props} onClick={reverseSign} />;
      }
      return <Button key={name} {...props} onClick={() => {}} />;
    });
  };

  render() {
    return <section className="button-list">{this.renderButtons()}</section>;
  }
}
