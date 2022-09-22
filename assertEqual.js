//function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("👍👍👍Assertion passed: " + actual + "===" + expected);
  } else if (actual !== expected) {
    console.log("🤢🤢🤢Assertion failed " + actual + "!==" + expected);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(1, 91);
assertEqual('Sushi', 'Sushi');