const path = require("path");
const fs = require("fs");

export const day4_problem1 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data
      .split("\n")
      .map(line => {
        return line.split(",").map(range => range.split("-").map(Number));
      })
      .map(line => {
        const a = line.map(([start, end]) => end - start);
        const max = Math.max(...a);
      });
    console.log(answer);
  } catch (err) {
    console.log(err);
  }
};
