import signs from './operatorSigns';

function removeLeadZero(text) {
  if (!(text[0] === '0' && text.length > 1)) {
    return text;
  }

  return text.slice(1);
}

function toggleSignInDisplay(text) {
  // to positive sign
  if (text[0] === '-') {
    return text.slice(1);
  }
  // to negative sign
  if (text[0] === '0' && text.length === 1) return text;
  return `-${text}`;
}

function performOperation({ value, previousValue, operation }) {
  if (!operation) return null;
  if (operation === signs.PLUS) return previousValue + value;
  if (operation === signs.MINUS) return previousValue - value;
  if (operation === signs.MULTIPLY) return previousValue * value;
  if (operation === signs.DIVIDE) return previousValue / value;
  // when things go nuts
  return null;
}

export { removeLeadZero, toggleSignInDisplay, performOperation };

export default {
  removeLeadZero,
  toggleSignInDisplay,
  performOperation,
};
