import { uniqueId } from 'lodash';

class Calculator {
  constructor() {
    this.keys = [];
  }

  addKey(key, id) {
    this.keys.push({ key, id });
  }

  get getAllKeys() {
    return this.keys;
  }
}

// {key: '1', id:'#one' }

const calculatorKeysArr = new Calculator();

calculatorKeysArr.addKey('', uniqueId());
calculatorKeysArr.addKey('+/-', 'toggle-sign');
calculatorKeysArr.addKey('AC', 'clear');
calculatorKeysArr.addKey('/', 'divide');
calculatorKeysArr.addKey(7, 'seven');
calculatorKeysArr.addKey(8, 'eight');
calculatorKeysArr.addKey(9, 'nine');
calculatorKeysArr.addKey('x', 'multiply');
calculatorKeysArr.addKey(4, 'four');
calculatorKeysArr.addKey(5, 'five');
calculatorKeysArr.addKey(6, 'six');
calculatorKeysArr.addKey('-', 'subtract');
calculatorKeysArr.addKey(1, 'one');
calculatorKeysArr.addKey(2, 'two');
calculatorKeysArr.addKey(3, 'three');
calculatorKeysArr.addKey('+', 'add');
calculatorKeysArr.addKey('', uniqueId());
calculatorKeysArr.addKey(0, 'zero');
calculatorKeysArr.addKey('.', 'decimal');
calculatorKeysArr.addKey('=', 'equals');

function calculatorKeys() {
  return {
    payload: calculatorKeysArr.getAllKeys,
  };
}

export default calculatorKeys;
