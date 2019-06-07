import { createStore } from 'redux';
import reducer from '../reducer';
import { calculator } from '../initialState';
import {
  updateValue,
  reverseSign,
  clearValue,
  putDecimal,
  registerAddOperation,
  registerSubtractOperation,
  equalOperation,
  saveToPreviousValue,
} from '../actions';
import signs from '../operatorSigns';

const store = createStore(reducer, { ...calculator });

beforeEach(() => {
  store.dispatch(clearValue());
});

test('updateValue input 1 must be 1', () => {
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

describe('putting decimal', () => {
  test('putDecimal input 0 , 1 must output .1', () => {
    store.dispatch(putDecimal());
    store.dispatch(updateValue(1));
    expect(store.getState()).toMatchObject({
      display: '.1',
      value: 0.1,
    });
  });

  test('putDecimal does not double decimal', () => {
    store.dispatch(putDecimal());
    store.dispatch(updateValue(1));
    store.dispatch(putDecimal());
    expect(store.getState()).toMatchObject({
      display: '.1',
      value: 0.1,
    });
  });
});

describe('reverse Sign', () => {
  test('reverseSign input 0 must output 0', () => {
    store.dispatch(reverseSign());
    expect(store.getState()).toMatchObject({
      display: '0',
      value: 0,
    });
  });
  test('reverseSign input 1000 must output -1000', () => {
    store.dispatch(updateValue(1000));
    store.dispatch(reverseSign());
    expect(store.getState()).toMatchObject({
      display: '-1000',
      value: -1000,
    });
  });
  test('reverseSign input -1000 must output 1000', () => {
    store.dispatch(updateValue(-1000));
    store.dispatch(reverseSign());
    expect(store.getState()).toMatchObject({
      display: '1000',
      value: 1000,
    });
  });
});

describe('add operation', () => {
  test('registers', () => {
    store.dispatch(registerAddOperation());
    expect(store.getState()).toMatchObject({
      operation: signs.PLUS,
    });
  });
  test('perform add operation works', () => {
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
});

describe('subtract operation', () => {
  it('registers', () => {
    store.dispatch(registerSubtractOperation());
    expect(store.getState()).toMatchObject({
      operation: signs.MINUS,
    });
  });

  it('performs subtract operation', () => {
    store.dispatch(updateValue(100));
    store.dispatch(registerSubtractOperation());
    store.dispatch(saveToPreviousValue());
    store.dispatch(clearValue());
    store.dispatch(updateValue(20));
    store.dispatch(equalOperation());
    expect(store.getState()).toMatchObject({
      display: '80',
      value: 80,
    });
  });
});
