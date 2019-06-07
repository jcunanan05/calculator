import {
  UPDATE_VALUE,
  PUT_DECIMAL,
  CLEAR_VALUE,
  REVERSE_SIGN,
  REGISTER_ADD_OPERATION,
  REGISTER_SUBTRACT_OPERATION,
  REGISTER_MULTIPLY_OPERATION,
  REGISTER_DIVIDE_OPERATION,
  SAVE_TO_PREVIOUS_VALUE,
  EQUAL_OPERATION,
} from './constants';

const updateValue = value => ({
  type: UPDATE_VALUE,
  value,
});

const putDecimal = () => ({
  type: PUT_DECIMAL,
});

const clearValue = () => ({
  type: CLEAR_VALUE,
});

const reverseSign = () => ({
  type: REVERSE_SIGN,
});

const registerAddOperation = () => ({
  type: REGISTER_ADD_OPERATION,
});

const registerSubtractOperation = () => ({
  type: REGISTER_SUBTRACT_OPERATION,
});

const registerMultiplyOperation = () => ({
  type: REGISTER_MULTIPLY_OPERATION,
});

const regsiterDivideOperation = () => ({
  type: REGISTER_DIVIDE_OPERATION,
});

const saveToPreviousValue = () => ({
  type: SAVE_TO_PREVIOUS_VALUE,
});

const equalOperation = () => ({
  type: EQUAL_OPERATION,
});

export {
  updateValue,
  putDecimal,
  clearValue,
  reverseSign,
  registerAddOperation,
  registerSubtractOperation,
  registerMultiplyOperation,
  regsiterDivideOperation,
  saveToPreviousValue,
  equalOperation,
};
