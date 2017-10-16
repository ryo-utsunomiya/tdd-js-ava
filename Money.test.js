import test from 'ava';
import Money from './Money';

test('multiplication', (t) => {
  const five = Money.dollar(5);
  t.true(Money.dollar(10).equals(five.times(2)));
  t.true(Money.dollar(15).equals(five.times(3)));
});

test('franc multiplication', (t) => {
  const five = Money.franc(5);
  t.true(Money.franc(10).equals(five.times(2)));
  t.true(Money.franc(15).equals(five.times(3)));
});

test('equality', (t) => {
  t.true(Money.dollar(5).equals(Money.dollar(5)));
  t.false(Money.dollar(5).equals(Money.dollar(6)));
  t.true(Money.franc(5).equals(Money.franc(5)));
  t.false(Money.franc(5).equals(Money.franc(6)));
  t.false(Money.franc(5).equals(Money.dollar(5)));
});

test('currency', (t) => {
  t.is(Money.dollar(1).currency, 'USD');
  t.is(Money.franc(1).currency, 'CHF');
});
