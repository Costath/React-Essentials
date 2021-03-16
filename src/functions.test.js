import {timesTwo} from "./functions";
//TDD = Test Driven Development, create the test, watch it fail, them make it pass
// the first argument is the name of the test
// the second argument contains what should be tested
test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
})