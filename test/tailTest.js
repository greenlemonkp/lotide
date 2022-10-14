const assert = require('chai').assert;
const tail = require('../tail');


const words = tail(["Yo Yo", "Lighthouse", "Labs"]);


describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(words.length, 2);
  });
});