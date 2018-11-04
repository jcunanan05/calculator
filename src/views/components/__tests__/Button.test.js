import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';

const props = {
  name: 'one',
  value: 1,
  className: 'number',
};

test('Button has correct content', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Button {...props} onClick={() => {}} />, container);

  expect(container.querySelector('button').textContent).toMatch(
    `${props.value}`
  );
});

test('Button has correct className', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Button {...props} onClick={() => {}} />, container);

  expect(container.querySelector('button').className).toMatch(props.className);
});

test('Button has correct id', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Button {...props} onClick={() => {}} />, container);

  expect(container.querySelector('button').getAttribute('id')).toBe(
    `${props.name}`
  );
});

test('Button has correct value', () => {
  const MockButton = <Button {...props} onClick={() => {}} />;
  expect(MockButton.props.value).toBe(props.value);
});
