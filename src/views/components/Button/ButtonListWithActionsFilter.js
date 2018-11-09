import React, { Component } from 'react';
import Button from '.';

// const noOp = () => {};

export default class ButtonListWithActionsFilter extends Component {
  renderButtons = () => {
    const { buttons, actions } = this.props;
    const { updateValue, putDecimal, clearValue } = actions;
    return buttons.map(props => {
      const { name } = props;
      if (props.name === 'decimal') {
        return <Button key={name} {...props} onClick={putDecimal} />;
      }

      if (props.name === 'clear') {
        return <Button key={name} {...props} onClick={clearValue} />;
      }

      if (props.className.includes('number')) {
        return <Button key={name} {...props} onClick={updateValue} />;
      }

      return <Button key={name} {...props} onClick={() => {}} />;
    });
  };

  render() {
    return <section className="button-list">{this.renderButtons()}</section>;
  }
}
