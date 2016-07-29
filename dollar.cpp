#define CATCH_CONFIG_MAIN
#include "catch.hpp"
#include "dollar.h"

Dollar::Dollar(__attribute__((unused)) int amount) {
};

void Dollar::operator*(__attribute__((unused)) int multiplier) {
  amount = 5 * 2;
};

TEST_CASE("Dollar objects can be multiplied by constants", "[Dollar]") {
  Dollar five = Dollar(5);

  five * 2;

  REQUIRE( 10 == five.amount );
}
