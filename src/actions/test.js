const calculator = (operator, num) => {
  switch (operator) {
    case "+":
      return (other) => num + other;
    case "-":
      return (other) => num - other;
    case "*":
      return (other) => num * other;
    default:
      return (other) => num / other;
  }
};

console.log(calculator("+", 8)(5));
console.log(calculator("+", 3)(5));
