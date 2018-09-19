import { CLICK_CALCULATOR_KEY } from './types';

function clickCalculatorKey(character) {
  return {
    type: CLICK_CALCULATOR_KEY,
    payload: { character },
  };
}

/* eslint-disable import/prefer-default-export */
export { clickCalculatorKey };
