import React from 'react';

const arr = [];

for (let i = 1; i <= 16; i += 1) {
  arr.push(i);
}

const Button = ({ children }) => (
  <button type="button" className="calculator__button">
    {children}
  </button>
);

const Calculator = () => (
  <section className="calculator">
    <div className="calculator__display">
      <section className="calculator__formula">
        <h2 className="title is-5">One + One</h2>
      </section>

      <section className="calculator__result">
        <h2 className="title">9</h2>
      </section>
    </div>

    <div className="calculator__body">
      {arr.map((num) => (
        <Button key={num}>{num}</Button>
      ))}
    </div>
  </section>
);

export default Calculator;
