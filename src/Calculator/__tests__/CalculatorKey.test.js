import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import CalculatorKey from '../CalculatorKey';

beforeEach(cleanup);

test('Calculator Button Works as Intended', () => {
  const handlePress = jest.fn();
  const { getByText } = render(
    <CalculatorKey onPress={handlePress}>1</CalculatorKey>
  );
  const Button = getByText('1');
  fireEvent.click(Button);
  expect(Button.textContent).toBe('1');
  expect(handlePress).toHaveBeenCalledTimes(1);
});
