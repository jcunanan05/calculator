import {
  UPDATE_VALUE,
  PUT_DECIMAL,
  CLEAR_VALUE,
  REVERSE_SIGN,
  REGISTER_ADD_OPERATION,
  SAVE_TO_PREVIOUS_VALUE,
  EQUAL_OPERATION,
} from './actions';
import {
  removeLeadZero,
  toggleSignInDisplay,
  performOperation,
} from './helpers';

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

  if (action.type === REVERSE_SIGN) {
    const value = state.value - state.value * 2;
    const display = toggleSignInDisplay(state.display);
    return {
      value,
      display,
    };
  }

  if (action.type === REGISTER_ADD_OPERATION) {
    return {
      ...state,
      operation: '+',
    };
  }

  if (action.type === SAVE_TO_PREVIOUS_VALUE) {
    return {
      ...state,
      previousValue: state.value,
    };
  }

  if (action.type === EQUAL_OPERATION) {
    if (!state.operation) return state;

    return {
      ...state,
      value: performOperation(state),
      previousValue: null,
      display: `${performOperation(state)}`,
      operation: null,
    };
  }

  return state;
}
