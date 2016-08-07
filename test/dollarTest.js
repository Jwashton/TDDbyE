import test from 'ava';
import { createDollar, createFranc } from '../lib/dollar';

test('Canary test', t => {
  t.pass();
});

test('Multiplication', t => {
  const five = createDollar(5);

  t.deepEqual(createDollar(10), five.times(2));
  t.deepEqual(createDollar(15), five.times(3));
});

test('FrancMultiplication', t => {
  const five = createFranc(5);

  t.deepEqual(createFranc(10), five.times(2));
  t.deepEqual(createFranc(15), five.times(3));
});

test('Equality', t => {
  t.deepEqual(createDollar(5), createDollar(5));
  t.notDeepEqual(createDollar(5), createDollar(6));
});
