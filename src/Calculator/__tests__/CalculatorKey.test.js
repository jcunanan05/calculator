import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CalculatorKey from '../CalculatorKey';

afterEach(cleanup);

test('Calculator Button Works as Intended', () => {
  const text = '1';
  const handlePress = jest.fn();
  const { getByText } = render(
    <CalculatorKey onPress={handlePress}>{text}</CalculatorKey>
  );
  const Button = getByText(text);
  fireEvent.click(Button);
  expect(Button.textContent).toBe(text);
  expect(handlePress).toHaveBeenCalledTimes(1);
});
