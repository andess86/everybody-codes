const fs = require("fs");
const round1 = fs.readFileSync(
  "data.txt",
  "utf-8",
  (_input: string, err: Error) => {
    if (err) {
      console.log(err);
    }
  }
);

const round2 = fs.readFileSync(
  "data2.txt",
  "utf-8",
  (_input: string, err: Error) => {
    if (err) {
      console.log(err);
    }
  }
);

const round3 = fs.readFileSync(
  "data3.txt",
  "utf-8",
  (_input: string, err: Error) => {
    if (err) {
      console.log(err);
    }
  }
);

const potionsRequired: Record<string, number> = {
  A: 0,
  B: 1,
  C: 3,
  D: 5,
  x: 0,
};

const calculateExtraCost: Record<number, number> = {
  0: 0,
  1: 0,
  2: 2,
  3: 6,
};

const fightMonsters = (input: string, groupSize: number): number => {
  if (groupSize === 1) {
    return input
      .split("")
      .reduce((sum, monster) => sum + (potionsRequired[monster] || 0), 0);
  } else {
    const pattern = new RegExp(`.{${groupSize}}`, "g");
    const group = input.match(pattern) || [];

    return group.reduce((sum, pair) => {
      const creatures = pair.split("");

      const baseCosts = creatures.reduce(
        (groupSum, char) => groupSum + (potionsRequired[char] || 0),
        0
      );

      const extraCost =
        calculateExtraCost[creatures.filter((char) => char !== "x").length];

      return sum + baseCosts + extraCost;
    }, 0);
  }
};

console.log("Round 1: ", fightMonsters(round1, 1));
console.log("Round 2: ", fightMonsters(round2, 2));
console.log("Round 3: ", fightMonsters(round3, 3));
