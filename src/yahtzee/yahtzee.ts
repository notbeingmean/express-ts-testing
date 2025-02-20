type Dice = 1 | 2 | 3 | 4 | 5 | 6;
export type ArrayOfDice = [Dice, Dice, Dice, Dice, Dice];

export class Yahtzee {
  constructor() {}

  calculateDicesByTarget(dices: ArrayOfDice, target: number): number {
    if (target < 1 || target > 6) throw new Error("Invalid target");
    return dices.reduce((acc, dice) => (dice === target ? acc + dice : acc), 0);
  }

  calculateThreeOrFourOfAKind(dices: ArrayOfDice, target: 3 | 4): number {
    const map: Record<number, number> = {};

    dices.map((dice) => {
      if (map[dice]) {
        map[dice]++;
      } else {
        map[dice] = 1;
      }
    });

    const result = Object.entries(map).find(([_, count]) => count >= target);

    return result ? dices.reduce((acc, dice) => acc + dice, 0) : 0;
  }

  calculateChange(dices: ArrayOfDice): number {
    return dices.reduce((acc, dice) => acc + dice, 0);
  }

  calculateFullHouse(dices: ArrayOfDice): number {
    const map: Record<number, number> = {};

    dices.map((dice) => {
      if (map[dice]) {
        map[dice]++;
      } else {
        map[dice] = 1;
      }
    });

    if (Object.keys(map).length !== 2) return 0;

    if (Object.values(map).includes(3) && Object.values(map).includes(2)) {
      return 25;
    }

    return 0;
  }

  calculateFiveOfAKind(dices: ArrayOfDice): number {
    const set = new Set(dices);

    if (set.size === 1) {
      return 50;
    }

    return 0;
  }

  calculateStraight(dices: ArrayOfDice, target: "small" | "large"): number {
    const set = new Set(dices);
    const sorted = [...set].sort((a, b) => a - b);

    switch (target) {
      case "small":
        return sorted.some(
          (num, i) =>
            i <= sorted.length - 4 &&
            sorted.slice(i, i + 4).every((val, j) => val === num + j)
        )
          ? 30
          : 0;
      case "large":
        return sorted.length === 5 && sorted[4] === sorted[0] + 4 ? 40 : 0;
      default:
        return 0;
    }
  }
}
