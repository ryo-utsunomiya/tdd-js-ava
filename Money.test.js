import test from 'ava';
import Dollar from './Dollar';

test('test multiplication', (t) => {
  const five = new Dollar(5);
  t.is(10, five.times(2).amount);
  t.is(15, five.times(3).amount);
});
