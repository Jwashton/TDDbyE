#ifndef _DOLLAR_H_
#define _DOLLAR_H_

class Dollar {
  public:
  Dollar(int amount);

  int amount;

  void operator*(int multiplier);
};

#endif // _DOLLAR_H_

