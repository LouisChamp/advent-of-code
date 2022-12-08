const path = require("path");
const fs = require("fs");

const letterToNumber = (letter: string) => {
  const code = letter.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    return code - 38;
  } else {
    return code - 96;
  }
};

export const day3_problem2 = () => {
  try {
    const problemPath = path.join(__dirname, "problem1_input.txt");
    const data: string = fs.readFileSync(problemPath, "utf8");
    const lines = data.split("\n");
    const elfGroups = [];
    for (let i = 0; i < lines.length; i++) {
      if (i % 3 === 0) {
        elfGroups.push(lines.slice(i, i + 3));
      }
    }
    const answer = elfGroups
      .map(elfGroup => elfGroup.map(elf => [...new Set(elf.split(""))]).flat(1))
      .map(elfGroup =>
        elfGroup.reduce((obj, letter) => {
          obj[letter] = (obj[letter] || 0) + 1;
          return obj;
        }, {} as { [k: string]: number })
      );

    console.log(answer);
  } catch (err) {
    console.error(err);
  }
};
