const createDollar = function createDollar(amount) {
  const money = { amount };

  const methods = {
    times(multiplier) {
      return createDollar(amount * multiplier);
    }
  };

  Reflect.setPrototypeOf(money, methods);

  return money;
};

export default createDollar;
