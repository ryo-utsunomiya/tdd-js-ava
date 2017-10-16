export default class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(money) {
    return this.amount === money.amount
      && this.currency === money.currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }


  static dollar(amount) {
    return new Money(amount, 'USD');
  }

  static franc(amount) {
    return new Money(amount, 'CHF');
  }
}
