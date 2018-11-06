export const UPDATE_VALUE = 'UPDATE_VALUE';
export const PUT_DECIMAL = 'PUT_DECIMAL';

export const updateValue = value => ({
  type: UPDATE_VALUE,
  value,
});

export const putDecimal = () => ({
  type: PUT_DECIMAL,
});
