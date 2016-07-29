const createDollar = function createDollar(amount) {
  const money = { amount };

  const methods = {
    times(multiplier) {
      return createDollar(amount * multiplier);
    },

    equals(rhs) {
      return amount === rhs.amount;
    }
  };

  return Object.assign(money, methods);
};

export default createDollar;
