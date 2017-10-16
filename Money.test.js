import test from 'ava';
import Money from './Money';
import Bank from './Bank';
import Sum from './Sum';

test('multiplication', async (t) => {
  const five = Money.dollar(5);
  t.true(Money.dollar(10).equals(five.times(2)));
  t.true(Money.dollar(15).equals(five.times(3)));
});

test('equality', async (t) => {
  t.true(Money.dollar(5).equals(Money.dollar(5)));
  t.false(Money.dollar(5).equals(Money.dollar(6)));
  t.false(Money.franc(5).equals(Money.dollar(5)));
});

test('currency', async (t) => {
  t.is(Money.dollar(1).currency, 'USD');
  t.is(Money.franc(1).currency, 'CHF');
});

test('simple addition', async (t) => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  const bank = new Bank();
  const reduced = bank.reduce(sum, 'USD');
  t.true(reduced.equals(Money.dollar(10)));
});

test('plus returns Sum', async (t) => {
  const five = Money.dollar(5);
  const sum = five.plus(five);
  t.is(five, sum.augend);
  t.is(five, sum.addend);
});

test('reduce sum', async (t) => {
  const sum = new Sum(Money.dollar(3), Money.dollar(4));
  const bank = new Bank();
  const result = bank.reduce(sum, 'USD');
  t.true(Money.dollar(7).equals(result));
});

test('reduce money', async (t) => {
  const bank = new Bank();
  const result = bank.reduce(Money.dollar(1), 'USD');
  t.true(result.equals(Money.dollar(1)));
});

test('reduce money different currency', async (t) => {
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(Money.dollar(1), 'USD');
  t.true(result.equals(Money.dollar(1)));
});

test('identity rate', async (t) => {
  t.is(new Bank().rate('USD', 'USD'), 1);
});

test('mixed addition', async (t) => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
  t.true(result.equals(Money.dollar(10)));
});

test('sum plus money', async (t) => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
  const result = bank.reduce(sum, 'USD');
  t.true(result.equals(Money.dollar(15)));
});

test('sum times', async (t) => {
  const fiveBucks = Money.dollar(5);
  const tenFrancs = Money.franc(10);
  const bank = new Bank();
  bank.addRate('CHF', 'USD', 2);
  const sum = new Sum(fiveBucks, tenFrancs).times(2);
  const result = bank.reduce(sum, 'USD');
  t.true(result.equals(Money.dollar(20)));
});
