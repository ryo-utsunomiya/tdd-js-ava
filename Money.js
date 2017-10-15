export default class Money {
  constructor(amount) {
    this.amount = amount;
  }

  equals(money) {
    return this.amount === money.amount
      && this.constructor.name === money.constructor.name;
  }
}
