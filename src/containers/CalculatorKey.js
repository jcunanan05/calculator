import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickCalculatorKey } from '../actions';

const mapDispatchToProps = () => ({
  dispatch: (character) => clickCalculatorKey(character),
});

class CalculatorKey extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { dispatch, character } = this.props;
    dispatch(character);
  }

  render() {
    const { character, id } = this.props;
    return (
      <button
        type="button"
        className="calculator__button"
        id={id}
        onClick={this.handleOnClick}
      >
        {character}
      </button>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(CalculatorKey);
