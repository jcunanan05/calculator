import { UPDATE_VALUE, PUT_DECIMAL } from './actions';
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

  return state;
}
