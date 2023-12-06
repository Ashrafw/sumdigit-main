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

const val = {
  state: {
    isDarkMode: false,
    gamesPlayed: 3,
    currentStreak: 3,
    longestStreak: 3,
    fastestTime: 205.409,
    solvedFirst: 0,
    solvedSecond: 3,
    solvedThird: 0,
    lastGameDate: "2023-12-04T23:41:25.836Z",
    mySolution: [
      [75, "x", 4, "=", 300],
      [300, "+", 50, "=", 350],
      [350, "-", 6, "=", 344],
      [344, "+", 2, "=", 346],
    ],
  },
  version: 0,
};
