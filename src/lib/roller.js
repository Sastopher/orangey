import { combinations } from "mathjs";

const roller = {
  dice(num, pips) {
    let result = 0;
    for (let i = 0; i < num; i++) {
      result += this.die(pips);
    }
    return result;
  },

  die(pips) {
    return Math.floor(Math.random() * pips) + 1;
  },

  combine(num, pips) {
    if (num === 0 || pips === 0) {
      return [];
    }
    const rolls = [];
    for (let i = 0; i < num; i++) {
      rolls.push(this.outcome(pips));
    }

    return rolls
      .reduce(
        (acc, rollOutcomes) => {
          const combined = [];
          acc.forEach(i => {
            rollOutcomes.forEach(j => {
              combined.push(i + j);
            });
          });
          return combined;
        },
        [0]
      )
      .sort((a, b) => (a < b ? -1 : 1));
  },

  outcomes(num, pips) {
    if (num === 0 || pips === 0) {
      return [];
    }
    const rolls = [];
    for (let i = 0; i < num; i++) {
      rolls.push(this.outcome(pips));
    }
    const results = Array(num * pips).fill(0);
    rolls.forEach(rollArray => {
      rollArray.forEach(roll => {});
    });
    for (let i = 0; i <= num; i++) {
      results[i + num - 1] = combinations(pips, i);
    }
    return results;
  },

  outcome(pips) {
    const result = [];
    for (let i = 0; i < pips; i++) {
      result.push(i + 1);
    }
    return result;
  },

  fillSize(size) {
    return Array(size).fill(1);
  }
};

export default roller;
