import { ArrayOfDice, Yahtzee } from "./yahtzee";

describe("Upper section Yahtzee: Success Case", () => {
  it("should return 1 when dice is [1,2,3,4,6] and target is 1", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [1, 2, 3, 4, 6];
    const target = 1;
    const expected = 1;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 3 when dice is [2,1,4,1,1] and target is 1 ", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [2, 1, 4, 1, 1];
    const target = 1;
    const expected = 3;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 0 when dice is [2,5,2,3,4]", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [2, 5, 2, 3, 4];
    const target = 1;
    const expected = 0;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 2 when dice is [3,4,6,2,1] and target is 2", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [3, 4, 6, 2, 1];
    const target = 2;
    const expected = 2;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 6 when dice is [2,5,2,6,2] and target is 2", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [2, 5, 2, 6, 2];
    const target = 2;
    const expected = 6;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 0 when dice is [3,5,6,1,1] and target is 2", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [3, 5, 6, 1, 1];
    const target = 2;
    const expected = 0;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 3 when dice is [1,2,3,4,5] and target is 3", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [1, 2, 3, 4, 5];
    const target = 3;
    const expected = 3;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 12 when dice is [3,3,4,3,3] and target is 3", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [3, 3, 4, 3, 3];
    const target = 3;
    const expected = 12;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 4 when dice is [1,2,3,4,5] and target is 4", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [1, 2, 3, 4, 5];
    const target = 4;
    const expected = 4;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 8 when dice is [5,2,4,4,5] and target is 4", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [5, 2, 4, 4, 5];
    const target = 4;
    const expected = 8;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 0 when dice is [6,1,3,6,5] and target is 4", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [6, 1, 3, 6, 5];
    const target = 4;
    const expected = 0;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 5 when dice is [1,2,3,4,5] and target is 5", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [1, 2, 3, 4, 5];
    const target = 5;
    const expected = 5;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 15 when dice is [5,2,3,5,5] and target is 5", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [5, 2, 3, 5, 5];
    const target = 5;
    const expected = 15;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 0 when dice is [1,2,3,4,4] and target is 5", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [1, 2, 3, 4, 4];
    const target = 5;
    const expected = 0;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 6 when dice is [4,3,6,1,2] and target is 6", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [4, 3, 6, 1, 2];
    const target = 6;
    const expected = 6;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 30 when dice is [6,6,6,6,6] and target is 6", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [6, 6, 6, 6, 6];
    const target = 6;
    const expected = 30;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });

  it("should return 0 when dice is [4,4,5,5,3] and target is 6", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [4, 4, 5, 5, 3];
    const target = 6;
    const expected = 0;

    const result = yahtzee.calculateDicesByTarget(dices, target);

    expect(expected).toBe(result);
  });
});

describe("Upper section Yahtzee: Failure Case", () => {
  it("should throw an error when target is 0 and dice is [1,1,1,1,1]", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [1, 1, 1, 1, 1];
    const target = 0;

    expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(
      "Invalid target"
    );
  });

  it("should throw an error when target is -1 and dice is [1,1,1,1,1]", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [1, 1, 1, 1, 1];
    const target = 7;

    expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(
      "Invalid target"
    );
  });

  it("should throw an error when target is 7 and dice is [2,2,2,2,2]", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [2, 2, 2, 2, 2];
    const target = 7;

    expect(() => yahtzee.calculateDicesByTarget(dices, target)).toThrow(
      "Invalid target"
    );
  });
});

describe("Change Yahtzee", () => {
  it("should return 16 when dice is [1,2,3,4,6]", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [1, 2, 3, 4, 6];
    const expected = 16;

    const result = yahtzee.calculateChange(dices);

    expect(expected).toBe(result);
  });

  it("should return 19 when dice is [4,6,5,1,3]", () => {
    const yahtzee = new Yahtzee();
    const dices: ArrayOfDice = [4, 6, 5, 1, 3];
    const expected = 19;

    const result = yahtzee.calculateChange(dices);

    expect(expected).toBe(result);
  });
});
