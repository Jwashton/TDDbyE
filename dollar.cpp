#define CATCH_CONFIG_MAIN
#include "catch.hpp"
#include "dollar.h"

Dollar::Dollar(int amount) : amount(amount) {};

Dollar Dollar::operator*(int multiplier) {
  return Dollar(amount * multiplier);
};

bool Dollar::operator==(Dollar rhs) {
  return amount == rhs.amount;
};

TEST_CASE("Dollar objects can be multiplied by constants", "[Dollar]") {
  Dollar five = Dollar(5);

  REQUIRE( Dollar(10) == five * 2 );
  REQUIRE( Dollar(15) == five * 3 );
}

TEST_CASE("Dollars can be equated to each other", "[Dollar]") {
  REQUIRE( Dollar(5) == Dollar(5) );
  REQUIRE_FALSE( Dollar(5) == Dollar(6) );
}
