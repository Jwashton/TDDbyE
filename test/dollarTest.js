import test from 'ava';
import createDollar from '../lib/dollar';

test('Canary test', t => {
  t.pass();
});

test('Multiplication', t => {
  const five = createDollar(5);
  let product;

  product = five.times(2);
  t.deepEqual(createDollar(10), product);
  product = five.times(3);
  t.is(15, product.amount);
});

test('Equality', t => {
  t.true(createDollar(5).equals(createDollar(5)));
  t.false(createDollar(5).equals(createDollar(6)));
});
