#define CATCH_CONFIG_MAIN
#include "catch.hpp"

TEST_CASE("Dollar objects can be multiplied by constants", "[Dollar]") {
  Dollar five = new Dollar(5);

  five.times(2);

  REQUIRE( 10 == five.amount );
}
