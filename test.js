import test from 'ava';
import foo from './foo';

test('test foo()', t => {
  t.is(foo(), 'foo');
});
