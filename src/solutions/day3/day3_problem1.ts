const path = require("path");
const fs = require("fs");

export const day3_problem1 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data.split("\n");
    // .map(line => line.split(" "))
    // .map(
    //   ([opponentMove, myMove]) =>
    //     calculatePoints(opponentMove as Move1, myMove as Move2) +
    //     movePoint(myMove as Move2)
    // )
    // .reduce((acc, current) => acc + current, 0);
    console.log(answer);
  } catch (err) {
    console.error(err);
  }
};
