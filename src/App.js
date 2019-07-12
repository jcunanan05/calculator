import React from 'react';
// import PointTarget from 'react-point';
import './App.css';

class AutoScalingText extends React.Component {
  state = {
    scale: 1,
  };

  componentDidUpdate() {
    const { scale } = this.state;

    const node = this.node;
    const parentNode = node.parentNode;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if (scale === actualScale) return;

    if (actualScale < 1) {
      this.setState({ scale: actualScale });
    } else if (scale < 1) {
      this.setState({ scale: 1 });
    }
  }

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

class CalculatorDisplay extends React.Component {
  render() {
    const { value, ...props } = this.props;

    const language = navigator.language || 'en-US';
    let formattedValue = parseFloat(value).toLocaleString(language, {
      useGrouping: true,
      maximumFractionDigits: 6,
    });

    // Add back missing .0 in e.g. 12.0
    const match = value.match(/\.\d*?(0*)$/);

    if (match) formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0];

    return (
      <div {...props} className="calculator-display">
        <AutoScalingText>{formattedValue}</AutoScalingText>
      </div>
    );
  }
}

class CalculatorKey extends React.Component {
  render() {
    const { onPress, className, ...props } = this.props;

    return (
      <button
        onClick={onPress}
        className={`calculator-key ${className}`}
        {...props}
      />
    );
  }
}

class Calculator extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false,
  };

  inputDigit = digit => {
    const { state } = this;
    const calculatedValue =
      state.displayValue === '0' ? String(digit) : state.displayValue + digit;
    this.setState({
      displayValue: calculatedValue,
    });
  };

  inputDot = () => {
    const { displayValue } = this.state;
    function noDotFound() {
      return displayValue.indexOf('.') === -1;
    }
    if (!noDotFound()) return;
    this.setState(currentState => ({
      displayValue: currentState.displayValue + '.',
    }));
  };

  render() {
    const { displayValue } = this.state;

    const clearDisplay = displayValue !== '0';
    const clearText = clearDisplay ? 'C' : 'AC';

    return (
      <div className="calculator">
        <CalculatorDisplay value={displayValue} />
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <CalculatorKey className="key-clear" onPress={() => {}}>
                {clearText}
              </CalculatorKey>
              <CalculatorKey className="key-sign" onPress={() => {}}>
                ±
              </CalculatorKey>
              <CalculatorKey className="key-percent" onPress={() => {}}>
                %
              </CalculatorKey>
            </div>
            <div className="digit-keys">
              <CalculatorKey
                className="key-0"
                onPress={() => this.inputDigit(0)}
              >
                0
              </CalculatorKey>
              <CalculatorKey
                className="key-dot"
                onPress={() => this.inputDot()}
              >
                ●
              </CalculatorKey>
              <CalculatorKey
                className="key-1"
                onPress={() => this.inputDigit(1)}
              >
                1
              </CalculatorKey>
              <CalculatorKey
                className="key-2"
                onPress={() => this.inputDigit(2)}
              >
                2
              </CalculatorKey>
              <CalculatorKey
                className="key-3"
                onPress={() => this.inputDigit(3)}
              >
                3
              </CalculatorKey>
              <CalculatorKey
                className="key-4"
                onPress={() => this.inputDigit(4)}
              >
                4
              </CalculatorKey>
              <CalculatorKey
                className="key-5"
                onPress={() => this.inputDigit(5)}
              >
                5
              </CalculatorKey>
              <CalculatorKey
                className="key-6"
                onPress={() => this.inputDigit(6)}
              >
                6
              </CalculatorKey>
              <CalculatorKey
                className="key-7"
                onPress={() => this.inputDigit(7)}
              >
                7
              </CalculatorKey>
              <CalculatorKey
                className="key-8"
                onPress={() => this.inputDigit(8)}
              >
                8
              </CalculatorKey>
              <CalculatorKey
                className="key-9"
                onPress={() => this.inputDigit(9)}
              >
                9
              </CalculatorKey>
            </div>
          </div>
          <div className="operator-keys">
            <CalculatorKey className="key-divide" onPress={() => {}}>
              ÷
            </CalculatorKey>
            <CalculatorKey className="key-multiply" onPress={() => {}}>
              ×
            </CalculatorKey>
            <CalculatorKey className="key-subtract" onPress={() => {}}>
              −
            </CalculatorKey>
            <CalculatorKey className="key-add" onPress={() => {}}>
              +
            </CalculatorKey>
            <CalculatorKey className="key-equals" onPress={() => {}}>
              =
            </CalculatorKey>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
