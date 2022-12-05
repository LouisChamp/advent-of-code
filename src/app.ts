import { day1_problem2 } from "./solutions";

const main = (mode: "all" | "last"): void => {
  const fns = [day1_problem2];

  if (mode === "all") {
    fns.forEach(fn => fn());
  } else if (mode === "last") {
    fns[fns.length - 1]();
  }
};

main("last");
