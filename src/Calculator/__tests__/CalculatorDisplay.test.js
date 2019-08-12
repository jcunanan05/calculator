import React from 'react';
import CalculatorDisplay from '../CalculatorDisplay';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

test('CalculatorDisplay can receive value', () => {
  const text = 'Some random text';
  const { getByText } = render(<CalculatorDisplay value={text} />);
  expect(getByText(text));
});
