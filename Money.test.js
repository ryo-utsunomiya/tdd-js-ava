import test from 'ava';
import Dollar from './Dollar';

test('test multiplication', (t) => {
  const five = new Dollar(5);
  five.times(2);
  t.is(10, five.amount);
});
