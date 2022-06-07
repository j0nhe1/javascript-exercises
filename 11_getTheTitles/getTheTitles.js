const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = function(arr) {
    return arr.map(function book(arr){return arr.title})
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
