export function calculate(num1: number, op: string, num2: number) {
  if (op === "+") {
    return num1 + num2;
  } else if (op === "-") {
    return num1 - num2;
  } else if (op === "x") {
    return num1 * num2;
  } else if (op === "÷") {
    return num1 / num2;
  }
}
