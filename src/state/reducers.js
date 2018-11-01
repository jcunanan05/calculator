import { combineReducers } from 'redux';
import calculator from './Calculator/reducer';

export default function reducers() {
  return combineReducers({
    calculator,
  });
}
