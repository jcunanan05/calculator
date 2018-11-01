import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  handleOnClick = () => {
    const { onClick, value } = this.props;
    onClick(value);
  };

  render() {
    const { name, value, className } = this.props;
    return (
      <button
        id={name}
        type="button"
        className={`button ${className}`}
        onClick={this.handleOnClick}
      >
        {value}
      </button>
    );
  }
}

export default Button;
