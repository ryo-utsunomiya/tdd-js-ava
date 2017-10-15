import Money from './Money';

export default class Dollar extends Money {
  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}
