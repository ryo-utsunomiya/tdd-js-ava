import Money from './Money';

export default class Franc extends Money {
  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}
