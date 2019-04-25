import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  updateValue,
  putDecimal,
  clearValue,
  reverseSign,
  registerAddOperation,
} from './actions';
import ButtonList from '../../views/components/Button/ButtonListWithActionsFilter';
import buttons from '../../views/components/Calculator/calculatorButtons';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateValue,
        putDecimal,
        clearValue,
        reverseSign,
        registerAddOperation,
      },
      dispatch
    ),
  };
}

function ButtonListContainer({ actions }) {
  return <ButtonList buttons={buttons.getAllButtons} actions={actions} />;
}

export default connect(
  null,
  mapDispatchToProps
)(ButtonListContainer);
