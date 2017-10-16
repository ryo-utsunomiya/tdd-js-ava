import test from 'ava';
import Money from './Money';
import Bank from './Bank';

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
