import test from 'ava';
import Dollar from './Dollar';

test('multiplication', async (t) => {
  const five = new Dollar(5);
  t.true(new Dollar(10).equals(five.times(2)));
  t.true(new Dollar(15).equals(five.times(3)));
});

test('equality', async (t) => {
  t.true(new Dollar(5).equals(new Dollar(5)));
});
