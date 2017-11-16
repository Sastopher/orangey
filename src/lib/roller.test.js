import roller from "./roller";

describe("roller", () => {
  let currentSeedIndex = 0;
  global.Math.random = (() => {
    const rngSeeds = [0.01, 0.17, 0.34, 0.51, 0.67, 0.84];
    return () => rngSeeds[currentSeedIndex++ % rngSeeds.length];
  })();

  beforeEach(() => {
    currentSeedIndex = 0;
  });

  describe("die", () => {
    it("rolls a die", () => {
      expect(roller.die(6)).toEqual(1);
    });
  });

  describe("dice", () => {
    it("rolls a die multiple times", () => {
      expect(roller.dice(5, 6)).toEqual(1 + 2 + 3 + 4 + 5);
    });
  });

  describe("outcome", () => {
    it("returns an array of all possible combinations in sorted order", () => {
      expect(roller.outcome(6)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe("combine", () => {
    it("returns an array of all possible outcomes for any number of rolls and pips", () => {
      expect(roller.combine(1, 6)).toEqual([1, 2, 3, 4, 5, 6]);
      expect(roller.combine(2, 2)).toEqual([2, 3, 3, 4]);
      expect(roller.combine(2, 3)).toEqual([2, 3, 3, 4, 4, 4, 5, 5, 6]);
      expect(roller.combine(3, 2)).toEqual([3, 4, 4, 4, 5, 5, 5, 6]);
    });
  });
});
