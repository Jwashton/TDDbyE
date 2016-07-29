#define CATCH_CONFIG_MAIN
#include "catch.hpp"
#include "dollar.h"

Dollar::Dollar(int amount) : amount(amount) {};

void Dollar::operator*(int multiplier) {
  amount *= multiplier;
};

TEST_CASE("Dollar objects can be multiplied by constants", "[Dollar]") {
  Dollar five = Dollar(5);

  five * 2;

  REQUIRE( 10 == five.amount );
}
