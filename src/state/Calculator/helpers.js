export function removeLeadZero(text) {
  if (!(text[0] === '0' && text.length > 1)) {
    return text;
  }

  return text.slice(1);
}

export default {
  removeLeadZero,
};

export function toggleSignInDisplay(text) {
  // to positive sign
  if (text[0] === '-') {
    return text.slice(1);
  }
  // to negative sign
  if (text[0] === '0' && text.length === 1) return text;
  return `-${text}`;
}
