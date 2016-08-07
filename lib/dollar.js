export const createDollar = function createDollar(amount) {
  const money = { amount };

  const methods = {
    times(multiplier) {
      return createDollar(amount * multiplier);
    }
  };

  Reflect.setPrototypeOf(money, methods);

  return Object.freeze(money);
};

export const createFranc = function createFranc(amount) {
  const money = { amount };

  const methods = {
    times(multiplier) {
      return createDollar(amount * multiplier);
    }
  };

  Reflect.setPrototypeOf(money, methods);

  return Object.freeze(money);
};

export default createDollar;
