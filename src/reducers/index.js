import { combineReducers } from 'redux';
import reducerHello from './reducerHello';

const rootReducer = combineReducers({
  hello: reducerHello,
});

export default rootReducer;
