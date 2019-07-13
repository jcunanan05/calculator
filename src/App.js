import React from 'react';
// import PointTarget from 'react-point';
import './App.css';
import CalculatorDisplay from './Calculator/CalculatorDisplay';
import CalculatorKey from './Calculator/CalculatorKey';

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

  clearDisplay = () => {
    this.setState({
      displayValue: '0',
    });
  };

  toggleSign = () => {
    const { displayValue } = this.state;
    function addSign() {
      if (displayValue.charAt(0) === '-') return displayValue.substr(1);
      return `-${displayValue}`;
    }
    this.setState({
      displayValue: addSign(),
    });
  };

  inputPercent = () => {
    const { state } = this;
    const value = parseFloat(state.displayValue);
    this.setState({
      displayValue: String(value / 100),
    });
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
              <CalculatorKey
                className="key-clear"
                onPress={() => this.clearDisplay()}
              >
                {clearText}
              </CalculatorKey>
              <CalculatorKey
                className="key-sign"
                onPress={() => this.toggleSign()}
              >
                ±
              </CalculatorKey>
              <CalculatorKey
                className="key-percent"
                onPress={() => this.inputPercent()}
              >
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
