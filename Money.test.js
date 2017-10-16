import test from 'ava';
import Money from './Money';
import Bank from './Bank';
import Sum from './Sum';

test('multiplication', (t) => {
  const five = Money.dollar(5);
  t.true(Money.dollar(10).equals(five.times(2)));
  t.true(Money.dollar(15).equals(five.times(3)));
});

test('equality', (t) => {
  t.true(Money.dollar(5).equals(Money.dollar(5)));
  t.false(Money.dollar(5).equals(Money.dollar(6)));
  t.false(Money.franc(5).equals(Money.dollar(5)));
});

test('currency', (t) => {
  t.is(Money.dollar(1).currency, 'USD');
  t.is(Money.franc(1).currency, 'CHF');
});

test('simple addition', (t) => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');
  t.true(reduced.equals(Money.dollar(10)));
});

test('plus returns Sum', (t) => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  t.is(five, sum.augend);
  t.is(five, sum.addend);
});

test('reduce sum', (t) => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, 'USD');
  t.true(Money.dollar(7).equals(result));
});

test('reduce money', (t) => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(1), 'USD');
  t.true(result.equals(Money.dollar(1)));
});

test('reduce money different currency', (t) => {
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(Money.dollar(1), 'USD');
  t.true(result.equals(Money.dollar(1)));
});

test('identity rate', (t) => {
  t.is(new Bank().rate('USD', 'USD'), 1);
});
