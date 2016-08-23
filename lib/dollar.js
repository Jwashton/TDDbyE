export const createMoney = function createMoney(amount, currency) {
  const money = { amount, currency };

  const methods = {
    equals(rhs) {
      return money.amount === rhs.amount && money.currency === rhs.currency;
    },

    times(multiplier) {
      return createMoney(amount * multiplier, currency);
    },

    toString() {
      return `${amount} ${currency}`;
    }
  };

  Reflect.setPrototypeOf(money, methods);

  return money;
};

export const mint = {
  dollars(amount) {
    return createMoney(amount, 'USD');
  },

  francs(amount) {
    return createMoney(amount, 'CHF');
  }
};

export default mint;
