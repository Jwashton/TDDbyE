#define CATCH_CONFIG_MAIN
#include "catch.hpp"
#include "dollar.h"

Dollar::Dollar(int amount) : amount(amount) {};

Dollar Dollar::operator*(int multiplier) {
  return Dollar(amount * multiplier);
};

TEST_CASE("Dollar objects can be multiplied by constants", "[Dollar]") {
  Dollar five = Dollar(5);
  Dollar product = five * 2;
  REQUIRE( 10 == product.amount );
  product = five * 3;
  REQUIRE( 15 == product.amount );
}

TEST_CASE("Dollars can be equated to each other", "[Dollar]") {
  REQUIRE( Dollar(5) == Dollar(5) );
}
