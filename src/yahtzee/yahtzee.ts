type Dice = 1 | 2 | 3 | 4 | 5 | 6;
export type ArrayOfDice = [Dice, Dice, Dice, Dice, Dice];

export class Yahtzee {
  constructor() {}

  calculateDicesByTarget(dices: ArrayOfDice, target: number): number {
    if (target < 1 || target > 6) throw new Error("Invalid target");
    return dices.reduce((acc, dice) => (dice === target ? acc + dice : acc), 0);
  }

  calculateChange(dices: ArrayOfDice): number {
    return dices.reduce((acc, dice) => acc + dice, 0);
  }
}
