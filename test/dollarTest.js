import test from 'ava';
import { mint, createFranc } from '../lib/dollar';

test('Canary test', t => {
  t.pass();
});

test('Multiplication', t => {
  const five = mint.dollars(5);

  t.true(mint.dollars(10).equals(five.times(2)));
  t.true(mint.dollars(15).equals(five.times(3)));
});

test('FrancMultiplication', t => {
  const five = createFranc(5);

  t.true(createFranc(10).equals(five.times(2)));
  t.true(createFranc(15).equals(five.times(3)));
});

test('Equality', t => {
  t.true(mint.dollars(5).equals(mint.dollars(5)));
  t.false(mint.dollars(5).equals(mint.dollars(6)));
  t.true(createFranc(5).equals(createFranc(5)));
  t.false(createFranc(5).equals(createFranc(6)));
  t.false(createFranc(5).equals(mint.dollars(5)));
});
