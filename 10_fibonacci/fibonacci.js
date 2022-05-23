const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let num0 = parseInt(num), num1 = 0, num2 = 1, num3;
    if (num0 == 0) return 0;

    for (let i = 1; i < num0; i++) {
        num3 = num2;
        num2 = num1 + num2;
        num1 = num3;
    };
    return num2;
};

fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(-25);
fibonacci("1");
fibonacci("2");
fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;

