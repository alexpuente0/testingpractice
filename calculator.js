class Calculator {
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }

  add = (n1, n2) => n1 + n2;
  substract = (n1, n2) => n1 - n2;
  multiply = (n1, n2) => n1 * n2;
  divide = (n1, n2) => n1 / n2;
}

module.exports = Calculator;
