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

export const createDollar = function createDollar(amount, currency) {
  const type = 'Dollar';
  const money = Object.assign(createMoney(amount, currency), { type });

  const methods = { };

  const moneyMethods = Reflect.getPrototypeOf(money);
  const prototype = Object.assign({}, moneyMethods, methods);

  Reflect.setPrototypeOf(money, prototype);

  return Object.freeze(money);
};

export const createFranc = function createFranc(amount, currency) {
  const type = 'Franc';
  const money = Object.assign(createMoney(amount, currency), { type });

  const methods = { };

  const moneyMethods = Reflect.getPrototypeOf(money);
  const prototype = Object.assign({}, moneyMethods, methods);

  Reflect.setPrototypeOf(money, prototype);

  return Object.freeze(money);
};

export const mint = {
  dollars(amount) {
    return createDollar(amount, 'USD');
  },

  francs(amount) {
    return createFranc(amount, 'CHF');
  }
};

export default mint;
