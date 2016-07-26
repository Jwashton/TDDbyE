const createDollar = function createDollar(amount) {
  const money = { amount };

  const methods = {
    times() { money.amount *= 2; }
  };

  return Object.assign(money, methods);
};

export default createDollar;
