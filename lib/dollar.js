const createMoney = function createMoney(amount) {
  const money = { amount };

  const methods = {
    equals(rhs) {
      return money.amount === rhs.amount && money.type === rhs.type;
    }
  };

  Reflect.setPrototypeOf(money, methods);

  return money;
};

export const createDollar = function createDollar(amount) {
  const money = Object.assign(createMoney(amount), { type: 'Dollar' });

  const methods = {
    times(multiplier) {
      return createDollar(amount * multiplier);
    }
  };

  const moneyMethods = Reflect.getPrototypeOf(money);
  const prototype = Object.assign({}, moneyMethods, methods);

  Reflect.setPrototypeOf(money, prototype);

  return Object.freeze(money);
};

export const createFranc = function createFranc(amount) {
  const money = Object.assign(createMoney(amount), { type: 'Franc' });

  const methods = {
    times(multiplier) {
      return createFranc(amount * multiplier);
    }
  };

  const moneyMethods = Reflect.getPrototypeOf(money);
  const prototype = Object.assign({}, moneyMethods, methods);

  Reflect.setPrototypeOf(money, prototype);

  return Object.freeze(money);
};

export const mint = {
  dollars(amount) {
    return createDollar(amount);
  },

  francs(amount) {
    return createFranc(amount);
  }
};

export default mint;
