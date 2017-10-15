import test from 'ava';
import Dollar from './Dollar';
import Franc from './Franc';

test('multiplication', async (t) => {
  const five = new Dollar(5);
  t.true(new Dollar(10).equals(five.times(2)));
  t.true(new Dollar(15).equals(five.times(3)));
});

test('franc multiplication', async (t) => {
  const five = new Franc(5);
  t.true(new Franc(10).equals(five.times(2)));
  t.true(new Franc(15).equals(five.times(3)));
});

test('equality', async (t) => {
  t.true(new Dollar(5).equals(new Dollar(5)));
  t.false(new Dollar(5).equals(new Dollar(6)));
  t.true(new Franc(5).equals(new Franc(5)));
  t.false(new Franc(5).equals(new Franc(6)));
  t.false(new Franc(5).equals(new Dollar(5)));
});
