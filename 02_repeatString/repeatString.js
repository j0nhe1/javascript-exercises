const repeatString = function(word, number) {
    let inputWord = '';
    for (let i = 0; i < number; i++) {
      inputWord += word;
    }
    return inputWord;
};


repeatString("hey",3)


// Do not edit below this line
module.exports = repeatString;
