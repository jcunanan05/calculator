import { createStore } from 'redux';
import reducer from '../reducer';
import { calculator } from '../initialState';
import {
  updateValue,
  reverseSign,
  clearValue,
  putDecimal,
  registerAddOperation,
  equalOperation,
  saveToPreviousValue,
} from '../actions';

const store = createStore(reducer, { ...calculator });

test('updateValue input 1 must be 1', () => {
  store.dispatch(clearValue());
  store.dispatch(updateValue(1));
  expect(store.getState()).toMatchObject({ display: '1', value: 1 });
});

test('clearValue must have 0 in display and value', () => {
  store.dispatch(updateValue(10000));
  store.dispatch(clearValue());
  expect(store.getState()).toMatchObject({
    display: '0',
    value: 0,
  });
});

test('putDecimal input 0 , 1 must output .1', () => {
  store.dispatch(clearValue());
  store.dispatch(putDecimal());
  store.dispatch(updateValue(1));
  expect(store.getState()).toMatchObject({
    display: '.1',
    value: 0.1,
  });
});

test('putDecimal does not double decimal', () => {
  store.dispatch(clearValue());
  store.dispatch(putDecimal());
  store.dispatch(updateValue(1));
  store.dispatch(putDecimal());
  expect(store.getState()).toMatchObject({
    display: '.1',
    value: 0.1,
  });
});

test('reverseSign input 0 must output 0', () => {
  store.dispatch(clearValue());
  store.dispatch(reverseSign());
  expect(store.getState()).toMatchObject({
    display: '0',
    value: 0,
  });
});

test('reverseSign input 1000 must output -1000', () => {
  store.dispatch(clearValue());
  store.dispatch(updateValue(1000));
  store.dispatch(reverseSign());
  expect(store.getState()).toMatchObject({
    display: '-1000',
    value: -1000,
  });
});

test('reverseSign input -1000 must output 1000', () => {
  store.dispatch(clearValue());
  store.dispatch(updateValue(-1000));
  store.dispatch(reverseSign());
  expect(store.getState()).toMatchObject({
    display: '1000',
    value: 1000,
  });
});

test('perform add operation works', () => {
  store.dispatch(clearValue());
  store.dispatch(updateValue(100));
  store.dispatch(registerAddOperation());
  store.dispatch(saveToPreviousValue());
  store.dispatch(clearValue());
  store.dispatch(updateValue(20));
  store.dispatch(equalOperation());
  expect(store.getState()).toMatchObject({
    display: '120',
    value: 120,
  });
});
