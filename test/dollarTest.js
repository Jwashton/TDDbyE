import test from 'ava';
import createDollar from '../lib/dollar';

test('Canary test', t => {
  t.pass();
});

test('Multiplication', t => {
  const five = createDollar(5);

  t.deepEqual(createDollar(10), five.times(2));
  t.deepEqual(createDollar(15), five.times(3));
});

test('Equality', t => {
  t.true(createDollar(5).equals(createDollar(5)));
  t.false(createDollar(5).equals(createDollar(6)));
});
