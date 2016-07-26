import test from 'ava';
import createDollar from '../lib/dollar';

test('Canary test', t => {
  t.pass();
});

test('Multiplication', t => {
  const five = createDollar(5);

  five.times(2);

  t.is(10, five.amount);
});
