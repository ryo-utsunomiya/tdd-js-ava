import test from 'ava';
import Dollar from './Dollar';

test('multiplication', async (t) => {
  const five = new Dollar(5);
  t.is(10, five.times(2).amount);
  t.is(15, five.times(3).amount);
});

test('equality', async (t) => {
  t.true(new Dollar(5).equals(new Dollar(5)));
});
