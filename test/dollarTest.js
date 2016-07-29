import test from 'ava';
import createDollar from '../lib/dollar';

test('Canary test', t => {
  t.pass();
});

test('Multiplication', t => {
  const five = createDollar(5);
  let product;

  product = five.times(2);
  t.is(10, product.amount);
  product = five.times(3);
  t.is(15, product.amount);
});
