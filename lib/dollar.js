const createDollar = function createDollar(amount) {
  const money = { amount };

  const methods = {
    times(multiplier) {
      money.amount *= multiplier;
    }
  };

  return Object.assign(money, methods);
};

export default createDollar;
