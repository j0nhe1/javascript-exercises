const add = (a, b) => (a + b);

add(0,0);
add(2,2);
add(2,6);


const subtract = (a, b) => (a - b);

subtract(10,4);


const sum = function(nums) {
  return nums.reduce((total, current) => (total + current), 0);
};

sum([]);
sum([7]);
sum([7,11]);
sum([1,3,5,7,9])


const multiply = function(nums) {
  return nums.reduce((total, current) => (total * current), );
};

multiply([2,4]);
multiply([2,4,6,8,10,12,14]);


const power = function(a, b) {return Math.pow(a, b)};

power(4,3);


const factorial = function(num) {
	if (num == 0) {return 1;}
  else if (num < 0) {return "error";}
  else {return (num * factorial(num - 1))}
};

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
