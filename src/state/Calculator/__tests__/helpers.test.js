import { removeLeadZero, toggleSignInDisplay } from '../helpers';

test('removeLeadZero input 0120 must output 120', () => {
  expect(removeLeadZero('0120')).toBe('120');
});

test('removeLeadZero input 120 must output 120', () => {
  expect(removeLeadZero('120')).toBe('120');
});

test('toggleSignInDisplay input 120 must output -120', () => {
  expect(toggleSignInDisplay('120')).toBe('-120');
});

test('toggleSignInDisplay input -120 must output 120', () => {
  expect(toggleSignInDisplay('-120')).toBe('120');
});

test('toggleSignInDisplay input 0 must output 0', () => {
  expect(toggleSignInDisplay('0')).toBe('0');
});
