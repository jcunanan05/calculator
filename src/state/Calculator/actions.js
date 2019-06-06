export const UPDATE_VALUE = 'UPDATE_VALUE';
export const PUT_DECIMAL = 'PUT_DECIMAL';
export const CLEAR_VALUE = 'CLEAR_VALUE';
export const REVERSE_SIGN = 'REVERSE_SIGN';
export const REGISTER_ADD_OPERATION = 'REGISTER_ADD_OPERATION';
export const SAVE_TO_PREVIOUS_VALUE = 'SAVE_TO_PREVIOUS_VALUE';
export const EQUAL_OPERATION = 'EQUAL_OPERATION';

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
