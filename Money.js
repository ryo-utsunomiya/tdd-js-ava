export default class Money {
  constructor(amount) {
    this.amount = amount;
  }

  equals(money) {
    return this.amount === money.amount
      && this.constructor.name === money.constructor.name;
  }

  static dollar(amount) {
    return new Dollar(amount);
  }

  static franc(amount) {
    return new Franc(amount);
  }
}

class Franc extends Money {
  times(multiplier) {
    return Money.franc(this.amount * multiplier);
  }
}

class Dollar extends Money {
  times(multiplier) {
    return Money.dollar(this.amount * multiplier);
  }
}
