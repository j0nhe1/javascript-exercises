const palindromes = function (str) {
    let char = str.toLowerCase().replace(/[\W_]/g, ""),
        revChar = char.split("").reverse().join("");
    return char == revChar;
};

palindromes('racecar');
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');



// Do not edit below this line
module.exports = palindromes;
