class Buttons {
  constructor() {
    this.buttons = [];
  }

  add(name, value, className) {
    this.buttons = [{ name, value, className }, ...this.buttons];
  }

  getAllButtons() {
    return this.buttons;
  }
}

const calculatorButtons = new Buttons();
calculatorButtons.add('zero', 0, 'number');
calculatorButtons.add('one', 1, 'number');
calculatorButtons.add('two', 2, 'number');
calculatorButtons.add('three', 3, 'number');
calculatorButtons.add('four', 4, 'number');
calculatorButtons.add('five', 5, 'number');
calculatorButtons.add('six', 6, 'number');
calculatorButtons.add('seven', 7, 'number');
calculatorButtons.add('eight', 8, 'number');
calculatorButtons.add('nine', 9, 'number');

export default calculatorButtons;
