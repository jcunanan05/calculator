import React, { Component } from 'react';
import Button from '.';

// const noOp = () => {};

export default class ButtonListWithActionsFilter extends Component {
  onAddClick = () => {
    const { actions } = this.props;
    actions.clearValue();
    actions.registerAddOperation();
  };

  renderButtons = () => {
    const { buttons, actions } = this.props;

    return buttons.map(props => {
      const { name, className } = props;
      if (name === 'decimal') {
        return <Button key={name} {...props} onClick={actions.putDecimal} />;
      }

      if (name === 'clear') {
        return <Button key={name} {...props} onClick={actions.clearValue} />;
      }

      if (className.includes('number')) {
        return <Button key={name} {...props} onClick={actions.updateValue} />;
      }

      if (name === 'polarity') {
        return <Button key={name} {...props} onClick={actions.reverseSign} />;
      }

      if (name === 'add') {
        return <Button key={name} {...props} onClick={this.onAddClick} />;
      }

      // no Op when not in the filter
      return <Button key={name} {...props} onClick={() => {}} />;
    });
  };

  render() {
    return <section className="button-list">{this.renderButtons()}</section>;
  }
}
