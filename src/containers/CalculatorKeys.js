import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CalculatorKey from '../components/CalculatorKey';

/* eslint-disable react/no-array-index-key */
const CalculatorKeys = ({ calculatorKeys }) => (
  <Fragment>
    {calculatorKeys.payload.map(({ key, id }) => (
      <CalculatorKey character={key} key={id} id={`#${id}`} />
    ))}
  </Fragment>
);

function mapStateToProps({ calculatorKeys }) {
  return { calculatorKeys };
}

export default connect(mapStateToProps)(CalculatorKeys);
