const randomNumber = Math.floor(Math.random() * 1000)
const repeatString = function(word, number) {
    if (number < 0) return "ERROR";
    let inputWord = "";
    for (let i = 0; i < number; i++) {
      inputWord += word;
      }
    return inputWord;
};


repeatString("hey",3)
repeatString("hey",10)
repeatString("hey",1)
repeatString("hey",0)
repeatString("hey",-1)
repeatString("hey",randomNumber)
repeatString("hey", )


// Do not edit below this line
module.exports = repeatString;
