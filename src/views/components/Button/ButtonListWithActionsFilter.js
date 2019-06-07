import React, { Component } from 'react';
import Button from '.';

/**
 * ButtonListWithActionsFilter
 * @param {Object} actions - redux actions
 * @param {Array} buttons
 */

export default class ButtonListWithActionsFilter extends Component {
  onAddClick = () => {
    const { actions } = this.props;
    actions.registerAddOperation();
    actions.saveToPreviousValue();
    actions.clearValue();
  };

  renderButtons = () => {
    const { buttons, actions } = this.props;

    return buttons.map(props => {
      const { className } = props;
      if (props.name === 'decimal') {
        return (
          <Button key={props.name} {...props} onClick={actions.putDecimal} />
        );
      }
      if (props.name === 'clear') {
        return (
          <Button key={props.name} {...props} onClick={actions.clearValue} />
        );
      }
      if (className.includes('number')) {
        return (
          <Button key={props.name} {...props} onClick={actions.updateValue} />
        );
      }
      if (props.name === 'polarity') {
        return (
          <Button key={props.name} {...props} onClick={actions.reverseSign} />
        );
      }
      if (props.name === 'add') {
        return <Button key={props.name} {...props} onClick={this.onAddClick} />;
      }
      if (props.name === 'equals') {
        return (
          <Button
            key={props.name}
            {...props}
            onClick={actions.equalOperation}
          />
        );
      }
      // no Op when not in the filter
      return <Button key={props.name} {...props} onClick={() => {}} />;
    });
  };

  render() {
    return <section className="button-list">{this.renderButtons()}</section>;
  }
}
