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
calculatorButtons.add('equals', '=', 'operation');
calculatorButtons.add('decimal', '.', 'function decimal');
calculatorButtons.add('zero', 0, 'number zero');
calculatorButtons.add('add', '+', 'operation');
calculatorButtons.add('three', 3, 'number');
calculatorButtons.add('two', 2, 'number');
calculatorButtons.add('one', 1, 'number');
calculatorButtons.add('subtract', '-', 'operation');
calculatorButtons.add('six', 6, 'number');
calculatorButtons.add('five', 5, 'number');
calculatorButtons.add('four', 4, 'number');
calculatorButtons.add('multiply', 'x', 'operation');
calculatorButtons.add('nine', 9, 'number');
calculatorButtons.add('eight', 8, 'number');
calculatorButtons.add('seven', 7, 'number');
calculatorButtons.add('divide', '÷', 'operation');
calculatorButtons.add('percentage', '%', 'function');
calculatorButtons.add('polarity', '+/-', 'function');
calculatorButtons.add('clear', 'AC', 'function');

export default calculatorButtons;
