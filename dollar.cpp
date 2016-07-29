#define CATCH_CONFIG_MAIN
#include "catch.hpp"
#include "dollar.h"

TEST_CASE("Dollar objects can be multiplied by constants", "[Dollar]") {
  Dollar five = Dollar(5);

  five.times(2);

  REQUIRE( 10 == five.amount );
}
