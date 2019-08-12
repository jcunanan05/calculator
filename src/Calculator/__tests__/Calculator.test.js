import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import * as dom from '@testing-library/dom';

import Calculator from '../index';

afterEach(cleanup);

describe('calculator', () => {
  test('Pressing 0, 0 will display 0', () => {
    const { getByTestId } = render(<Calculator />);
    const displayText = getByTestId('auto-scaling-text');
    const keypad = getByTestId('calculator-keypad');
    fireEvent.click(dom.getByText(keypad, '0'));
    fireEvent.click(dom.getByText(keypad, '0'));
    expect(dom.getByText(displayText, '0'));
  });

  test('Press 2, 0 displays 20', () => {
    const { getByTestId } = render(<Calculator />);
    const displayText = getByTestId('auto-scaling-text');
    const keypad = getByTestId('calculator-keypad');
    fireEvent.click(dom.getByText(keypad, '2'));
    fireEvent.click(dom.getByText(keypad, '0'));
    expect(dom.getByText(displayText, '20'));
  });

  test('Press 1,2,+,1,0,=,*,3,/,6,-,1,=  displays 10', () => {
    const { getByTestId } = render(<Calculator />);
    const displayText = getByTestId('auto-scaling-text');
    const keypad = getByTestId('calculator-keypad');
    fireEvent.click(dom.getByText(keypad, '1'));
    fireEvent.click(dom.getByText(keypad, '2'));
    fireEvent.click(dom.getByText(keypad, '+'));
    fireEvent.click(dom.getByText(keypad, '1'));
    fireEvent.click(dom.getByText(keypad, '0'));
    fireEvent.click(dom.getByText(keypad, '='));
    fireEvent.click(dom.getByText(keypad, '×'));
    fireEvent.click(dom.getByText(keypad, '3'));
    fireEvent.click(dom.getByText(keypad, '÷'));
    fireEvent.click(dom.getByText(keypad, '6'));
    fireEvent.click(dom.getByText(keypad, '−'));
    fireEvent.click(dom.getByText(keypad, '1'));
    fireEvent.click(dom.getByText(keypad, '='));
    console.log(displayText.textContent);
    expect(dom.getByText(displayText, '10'));
  });
});
