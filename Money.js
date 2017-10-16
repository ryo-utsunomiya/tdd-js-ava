import Sum from './Sum';

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

  plus(addend) {
    return new Sum(this, addend);
  }

  reduce() {
    return this;
  }

  static dollar(amount) {
    return new Money(amount, 'USD');
  }

  static franc(amount) {
    return new Money(amount, 'CHF');
  }
}
