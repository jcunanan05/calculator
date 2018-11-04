import React from 'react';
import { connect } from 'react-redux';
import { updateValue } from './actions';
import ButtonList from '../../views/components/Button/ButtonList';
import buttons from '../../views/components/Calculator/calculatorButtons';

function mapDispatchToProps(dispatch) {
  return {
    onButtonClick(value) {
      dispatch(updateValue(value));
    },
  };
}

function ButtonListContainer({ onButtonClick }) {
  return (
    <ButtonList buttons={buttons.getAllButtons} onButtonClick={onButtonClick} />
  );
}

export default connect(
  null,
  mapDispatchToProps
)(ButtonListContainer);
