export function removeLeadZero(text) {
  if (!(text.indexOf('0') === 0 && text.length > 1)) {
    return text;
  }

  return text.slice(1);
}

export default {
  removeLeadZero,
};
