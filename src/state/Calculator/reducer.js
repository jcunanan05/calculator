import { UPDATE_VALUE } from './actions';

export default function calculatorReducer(state = {}, action) {
  if (action.type === UPDATE_VALUE) {
    const value = Number(`${state.display}${action.value}`);
    const display = String(value);
    return {
      ...state,
      display,
      value,
    };
  }

  return state;
}
