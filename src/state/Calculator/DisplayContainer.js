import React from 'react';
import { connect } from 'react-redux';
import Display from '../../views/components/Calculator/Display';

function mapStateToProps({ calculator }) {
  return {
    value: calculator.display,
  };
}

function DisplayContainer({ value }) {
  return <Display value={value} />;
}

export default connect(mapStateToProps)(DisplayContainer);
