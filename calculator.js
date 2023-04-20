var Calculator = (function () {
  var instance;

  function createInstance() {
    var calculator = new Object();

    calculator.screen = '';
    calculator.operator = '';
    calculator.result = 0;

    calculator.addToScreen = function (value) {
      if (this.screen === '0' && value !== '.') {
        this.screen = '';
      }
      this.screen += value;
      document.getElementById('calculator-screen').innerHTML = this.screen;
    };

    calculator.performOperation = function (operator) {
      if (this.operator !== '') {
        this.result = this.calculate(this.result, parseFloat(this.screen), this.operator);
        this.operator = operator;
        this.screen = '';
        document.getElementById('calculator-screen').innerHTML = this.result;
      } else {
        this.result = parseFloat(this.screen);
        this.operator = operator;
        this.screen = '';
      }
    };

    calculator.calculate = function (num1, num2, operator) {
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        default:
          return 0;
      }
    };

    calculator.clearScreen = function () {
      this.screen = '0';
      document.getElementById('calculator-screen').innerHTML = this.screen;
    };

    return calculator;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

function init() {
  Calculator.getInstance();
}

document.addEventListener('DOMContentLoaded', init);

