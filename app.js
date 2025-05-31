// require("./xyz.js");
// const {x, calculateSum} = require("./calculate/sum.js")
// import { calculateSum } from "./sum.js";

const { calculateSum, calculateMultiply } = require("./calculate");

var a = 10;
var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
// console.log(x);

console.log(globalThis === global);
