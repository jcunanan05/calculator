import {
  UPDATE_VALUE,
  PUT_DECIMAL,
  CLEAR_VALUE,
  REVERSE_SIGN,
  REGISTER_ADD_OPERATION,
  SAVE_TO_PREVIOUS_VALUE,
  EQUAL_OPERATION,
} from './constants';

export const updateValue = value => ({
  type: UPDATE_VALUE,
  value,
});

export const putDecimal = () => ({
  type: PUT_DECIMAL,
});

export const clearValue = () => ({
  type: CLEAR_VALUE,
});

export const reverseSign = () => ({
  type: REVERSE_SIGN,
});

export const registerAddOperation = () => ({
  type: REGISTER_ADD_OPERATION,
});

export const saveToPreviousValue = () => ({
  type: SAVE_TO_PREVIOUS_VALUE,
});

export const equalOperation = () => ({
  type: EQUAL_OPERATION,
});
