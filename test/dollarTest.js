import test from 'ava';
import { createDollar, createFranc } from '../lib/dollar';

test('Canary test', t => {
  t.pass();
});

test('Multiplication', t => {
  const five = createDollar(5);

  t.true(createDollar(10).equals(five.times(2)));
  t.true(createDollar(15).equals(five.times(3)));
});

test('FrancMultiplication', t => {
  const five = createFranc(5);

  t.true(createFranc(10).equals(five.times(2)));
  t.true(createFranc(15).equals(five.times(3)));
});

test('Equality', t => {
  t.true(createDollar(5).equals(createDollar(5)));
  t.false(createDollar(5).equals(createDollar(6)));
  t.true(createFranc(5).equals(createFranc(5)));
  t.false(createFranc(5).equals(createFranc(6)));
  t.false(createFranc(5).equals(createDollar(5)));
});
