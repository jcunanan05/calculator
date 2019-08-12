import React from 'react';
// import PointTarget from 'react-point';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKey from './CalculatorKey';

class Calculator extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false,
  };

  inputDigit = digit => {
    const { state } = this;

    if (state.waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
      return;
    }

    this.setState(currentState => ({
      displayValue:
        currentState.displayValue === '0'
          ? String(digit)
          : currentState.displayValue + digit,
    }));
  };

  inputDot = () => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: '.',
        waitingForOperand: false,
      });
      return;
    }

    if (!noDotFound()) return;
    this.setState(currentState => ({
      displayValue: currentState.displayValue + '.',
    }));

    function noDotFound() {
      return displayValue.indexOf('.') === -1;
    }
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

  performOperation = nextOperator => {
    const { state } = this;
    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (___, nextValue) => nextValue,
    };

    if (state.value === null) {
      // no previous value, hit operator key
      this.setState({
        value: parseFloat(state.displayValue),
      });
    } else if (state.operator) {
      const computedValue = operations[state.operator](
        state.value || 0,
        parseFloat(state.displayValue)
      );
      this.setState({
        value: computedValue,
        displayValue: String(computedValue),
      });
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator,
    });
  };

  render() {
    const { displayValue } = this.state;

    const clearDisplay = displayValue !== '0';
    const clearText = clearDisplay ? 'C' : 'AC';

    return (
      <section className="calculator-container">
        <div className="calculator">
          <CalculatorDisplay
            data-testid="display"
            id="display"
            value={displayValue}
          />
          <div data-testid="calculator-keypad" className="calculator-keypad">
            <div className="input-keys">
              <div className="function-keys">
                <CalculatorKey
                  id="clear"
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
                  id="zero"
                  className="key-0"
                  onPress={() => this.inputDigit(0)}
                >
                  0
                </CalculatorKey>
                <CalculatorKey
                  id="decimal"
                  className="key-dot"
                  onPress={() => this.inputDot()}
                >
                  <span style={{ fontSize: '3rem' }}>.</span>
                </CalculatorKey>
                <CalculatorKey
                  id="one"
                  className="key-1"
                  onPress={() => this.inputDigit(1)}
                >
                  1
                </CalculatorKey>
                <CalculatorKey
                  id="two"
                  className="key-2"
                  onPress={() => this.inputDigit(2)}
                >
                  2
                </CalculatorKey>
                <CalculatorKey
                  id="three"
                  className="key-3"
                  onPress={() => this.inputDigit(3)}
                >
                  3
                </CalculatorKey>
                <CalculatorKey
                  id="four"
                  className="key-4"
                  onPress={() => this.inputDigit(4)}
                >
                  4
                </CalculatorKey>
                <CalculatorKey
                  id="five"
                  className="key-5"
                  onPress={() => this.inputDigit(5)}
                >
                  5
                </CalculatorKey>
                <CalculatorKey
                  id="six"
                  className="key-6"
                  onPress={() => this.inputDigit(6)}
                >
                  6
                </CalculatorKey>
                <CalculatorKey
                  id="seven"
                  className="key-7"
                  onPress={() => this.inputDigit(7)}
                >
                  7
                </CalculatorKey>
                <CalculatorKey
                  id="eight"
                  className="key-8"
                  onPress={() => this.inputDigit(8)}
                >
                  8
                </CalculatorKey>
                <CalculatorKey
                  id="nine"
                  className="key-9"
                  onPress={() => this.inputDigit(9)}
                >
                  9
                </CalculatorKey>
              </div>
            </div>
            <div className="operator-keys">
              <CalculatorKey
                id="divide"
                className="key-divide"
                onPress={() => this.performOperation('/')}
              >
                ÷
              </CalculatorKey>
              <CalculatorKey
                id="multiply"
                className="key-multiply"
                onPress={() => this.performOperation('*')}
              >
                ×
              </CalculatorKey>
              <CalculatorKey
                id="subtract"
                className="key-subtract"
                onPress={() => this.performOperation('-')}
              >
                −
              </CalculatorKey>
              <CalculatorKey
                id="add"
                className="key-add"
                onPress={() => this.performOperation('+')}
              >
                +
              </CalculatorKey>
              <CalculatorKey
                id="equals"
                className="key-equals"
                onPress={() => this.performOperation('=')}
              >
                =
              </CalculatorKey>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
