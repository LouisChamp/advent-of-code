const path = require("path");
const fs = require("fs");

export const day3_problem1 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const answer = data
      .split("\n")
      .map(line => line.split(""))
      .map(line => {
        const left = line.slice(0, line.length / 2);
        const right = line.slice(line.length / 2, line.length);
        let repeated;
        for (let letterIndex = 0; letterIndex < line.length; letterIndex++) {
          if (
            left.includes(line[letterIndex]) &&
            right.includes(line[letterIndex])
          ) {
            repeated = line[letterIndex];
            break;
          }
        }
        return repeated;
      });

    console.log(answer);
  } catch (err) {
    console.error(err);
  }
};
