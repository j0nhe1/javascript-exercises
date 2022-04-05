const sumAll = function(begin, end) {
    if (!Number.isInteger(begin) || !Number.isInteger(end)) {
        return "ERROR";
    }
    
    if (begin < 0 || end < 0) {
        return "ERROR";
    }

    if (begin > end) {
        let holder = begin;
        begin = end;
        end = holder;
    }
    let sum = 0;
    for (let i = begin; i < end + 1; i++) {
      sum += i;
    }
    return sum;
  };

sumAll(1, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(10, "90")
sumAll(10, [90, 1])

// Do not edit below this line
module.exports = sumAll;
