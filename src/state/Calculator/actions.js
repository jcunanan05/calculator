export const UPDATE_VALUE = 'UPDATE_VALUE';
export const PUT_DECIMAL = 'PUT_DECIMAL';
export const CLEAR_VALUE = 'CLEAR_VALUE';

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
