import { UPDATE_VALUE } from './actions';

export default function calculatorReducer(state = {}, action) {
  if (action.type === UPDATE_VALUE) {
    return {
      ...state,
      display: action.value,
    };
  }

  return state;
}
