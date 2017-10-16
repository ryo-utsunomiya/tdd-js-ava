import Money from './Money';

export default class Sum {
  constructor(augend, addend) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
