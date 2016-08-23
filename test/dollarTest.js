import test from 'ava';
import { mint } from '../lib/dollar';

test('Canary test', t => {
  t.pass();
});

test('Multiplication', t => {
  const five = mint.dollars(5);

  t.true(mint.dollars(10).equals(five.times(2)));
  t.true(mint.dollars(15).equals(five.times(3)));
});

test('Equality', t => {
  t.true(mint.dollars(5).equals(mint.dollars(5)));
  t.false(mint.dollars(5).equals(mint.dollars(6)));
  t.false(mint.francs(5).equals(mint.dollars(5)));
});

test('Currency', t => {
  t.is('USD', mint.dollars(1).currency);
  t.is('CHF', mint.francs(1).currency);
});
