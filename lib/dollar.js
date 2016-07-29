const createDollar = function createDollar(amount) {
  const money = { amount };

  const methods = {
    times(multiplier) {
      return createDollar(amount * multiplier);
    }
  };

  return Object.assign(money, methods);
};

export default createDollar;
