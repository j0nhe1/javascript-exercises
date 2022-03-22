const reverseString = function(string) {
    let newString = "";
    for (i =  string.length - 1; i >= 0 ; i--) {
        newString = newString + string[i];
    }
    return newString

};

reverseString("hello")
reverseString("hello there")
reverseString("123! abc!")
reverseString(" ")

// Do not edit below this line
module.exports = reverseString;
