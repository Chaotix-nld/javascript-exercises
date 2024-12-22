const add = function(x, y) {
  let add = x + y;
  return add;
};

const subtract = function(x, y) {
	let subst = x - y;
  return subst;
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((product, current) => product * current)
};

const power = function(x, y) {
	return Math.pow(x, y)
}
const factorial = function(n) {
  let fact = 1;
    for(i = n; i > 0; i--){
    fact *= i  
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
