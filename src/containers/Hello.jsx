import React from 'react';
import { connect } from 'react-redux';

const Hello = (props) => {
  const { payload } = props;

  return <h1>{payload.text}</h1>;
};

function mapStateToProps(state) {
  return {
    payload: state.hello,
  };
}

export default connect(mapStateToProps)(Hello);
