const createMoney = function createMoney(amount, currency) {
  const money = { amount, currency };

  const methods = {
    equals(rhs) {
      return money.amount === rhs.amount && money.type === rhs.type;
    }
  };

  Reflect.setPrototypeOf(money, methods);

  return money;
};

export const createDollar = function createDollar(amount, currency) {
  const money = Object.assign(createMoney(amount, currency), { type: 'Dollar' });

  const methods = {
    times(multiplier) {
      return mint.dollars(amount * multiplier);
    }
  };

  const moneyMethods = Reflect.getPrototypeOf(money);
  const prototype = Object.assign({}, moneyMethods, methods);

  Reflect.setPrototypeOf(money, prototype);

  return Object.freeze(money);
};

export const createFranc = function createFranc(amount, currency) {
  const money = Object.assign(createMoney(amount, currency), { type: 'Franc' });

  const methods = {
    times(multiplier) {
      return mint.francs(amount * multiplier);
    }
  };

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
