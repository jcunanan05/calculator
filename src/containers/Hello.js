import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hello extends Component {
  render() {
    const { payload } = this.props;

    return <h1>{payload.text}</h1>;
  }
}

function mapStateToProps(state) {
  return {
    payload: state.hello,
  };
}

export default connect(mapStateToProps)(Hello);
