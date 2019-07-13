import React from 'react';

class AutoScalingText extends React.Component {
  state = {
    scale: 1,
  };

  componentDidUpdate = () => {
    const { state } = this;
    const node = this.node;
    const availableWidth = node.parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;
    if (state.scale === actualScale) return;
    if (actualScale < 1) {
      this.setState({ scale: actualScale });
    } else if (state.scale < 1) {
      this.setState({ scale: 1 });
    }
  };

  render() {
    const { scale } = this.state;

    return (
      <div
        className="auto-scaling-text"
        style={{ transform: `scale(${scale},${scale})` }}
        ref={node => (this.node = node)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default AutoScalingText;
