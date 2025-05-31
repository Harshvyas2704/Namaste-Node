// modules protects its variable and functions from leaking
// common JS modules
// requires -> module.exports
// by default
// non strict mode
// ES modules
// import export 
// strict mode

var x = "hello world";
 function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = {
  x,
  calculateSum,
};
