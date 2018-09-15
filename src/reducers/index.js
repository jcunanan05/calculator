import { combineReducers } from 'redux';
import calculatorKeys from './calculatorKeys';
import displayFormula from './displayFormula';
import result from './result';

const rootReducer = combineReducers({
  calculatorKeys,
  displayFormula,
  result,
});

export default rootReducer;
