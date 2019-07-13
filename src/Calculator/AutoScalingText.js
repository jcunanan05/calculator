import React from 'react';

class AutoScalingText extends React.Component {
  state = {
    scale: 1,
  };

  render() {
    const { scale } = this.state;

    return <div className="auto-scaling-text">{this.props.children}</div>;
  }
}

export default AutoScalingText;
