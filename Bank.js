export default class Bank {
  constructor() {
    this.rates = {};
  }

  reduce(source, to) {
    return source.reduce(this, to);
  }

  addRate(from, to, rate) {
    this.rates[from + to] = rate;
  }

  rate(from, to) {
    if (from === to) return 1;
    return this.rates[from + to];
  }
}
