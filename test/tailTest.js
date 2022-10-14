const assert = require('chai').assert;
const tail = require('../tail');


const words = tail(["Yo Yo", "Lighthouse", "Labs"]);


describe("#tail", () => {
  it("returns 2 for 2", () => {
    assert.deepEqual(words.length, 2);
  });
});