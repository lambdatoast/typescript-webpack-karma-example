import f = require('./../src/user');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    const r : number = 25;
    expect(f(5)).toBe(r);
  });
});
