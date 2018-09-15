import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CalculatorKey from '../components/CalculatorKey';

/* eslint-disable react/no-array-index-key */
const CalculatorKeys = ({ calculatorKeys }) => (
  <Fragment>
    {calculatorKeys.payload.map((calculatorKey, i) => (
      <CalculatorKey character={calculatorKey} key={i} />
    ))}
  </Fragment>
);

function mapStateToProps({ calculatorKeys }) {
  return { calculatorKeys };
}

export default connect(mapStateToProps)(CalculatorKeys);
