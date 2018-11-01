import { compose, createStore } from 'redux';
import reducers from './reducers';
import calculator from './Calculator/store';

/* eslint-disable no-underscore-dangle */

const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, calculator, composeEnhancers(...enhancers));

export default store;
