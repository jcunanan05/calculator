import { UPDATE_VALUE, PUT_DECIMAL, CLEAR_VALUE } from './actions';
import { removeLeadZero } from './helpers';

export default function calculatorReducer(state = {}, action) {
  if (action.type === UPDATE_VALUE) {
    const display = removeLeadZero(`${state.display}${action.value}`);
    const value = Number(display);
    return {
      ...state,
      display,
      value,
    };
  }

  if (action.type === PUT_DECIMAL) {
    const { display } = state;
    if (display.includes('.')) return state;

    return {
      ...state,
      display: `${display}.`,
    };
  }

  if (action.type === CLEAR_VALUE) {
    return {
      ...state,
      display: '0',
      value: 0,
    };
  }

  return state;
}
