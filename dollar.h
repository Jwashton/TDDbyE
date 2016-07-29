#ifndef _DOLLAR_H_
#define _DOLLAR_H_

class Dollar {
  public:
  Dollar(int amount);

  int amount;

  Dollar operator*(int multiplier);
  bool operator==(Dollar rhs);
};

#endif // _DOLLAR_H_

