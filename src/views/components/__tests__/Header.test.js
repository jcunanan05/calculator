import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

const props = {
  value: '0',
};

test('Display has correct value', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Header value={props.value} />, container);

  expect(container.querySelector('.title').textContent).toMatch(props.value);
});
