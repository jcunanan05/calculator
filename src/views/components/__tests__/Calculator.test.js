import React from 'react';
import ReactDOM from 'react-dom';
import Display from '../Calculator/Display';

const props = {
  value: '0',
};

test('Display has correct value', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Display value={props.value} />, container);
  expect(container.querySelector('.display').textContent).toMatch(props.value);
});
