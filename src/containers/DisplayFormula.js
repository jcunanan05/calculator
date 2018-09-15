import React from 'react';
import { connect } from 'react-redux';

const DisplayFormula = ({ displayFormula }) => (
  <h2 className="title is-5">{displayFormula.payload}</h2>
);

function mapStateToProps({ displayFormula }) {
  return { displayFormula };
}

export default connect(mapStateToProps)(DisplayFormula);
