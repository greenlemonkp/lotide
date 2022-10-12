const assertEqual = require('../assertEqual');
const tail = require('../tail');




const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2);