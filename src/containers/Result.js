import React from 'react';
import { connect } from 'react-redux';

const Result = ({ result }) => <h2 className="title is-1">{result.payload}</h2>;

function mapStateToProps({ result }) {
  return { result };
}

export default connect(mapStateToProps)(Result);
