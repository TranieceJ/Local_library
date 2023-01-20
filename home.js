const { findAuthorById } = require("./books");

function getTotalBooksCount(books) {
return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0
  books.forEach((bookObj) => {
    const isReturned = bookObj.borrows.every((borrowObj) => {
      return borrowObj.returned;
    });
    if (isReturned === false) {
return total ++
    }
})
return total
}


function getMostCommonGenres(books=[]) {
let popularGenres = [];
books.forEach((bookObj)=>{
  const {genre} = bookObj;
  let foundGenre = popularGenres.find((common)=>{
    return common.name === genre
  })
  if (foundGenre === undefined){
    let genreObj = {name: genre, count: 1};
    popularGenres.push(genreObj)
  }
  else{
    foundGenre.count++
  }
   popularGenres.sort((genreA,genreB)=>{
return genreB.count - genreA.count;
  })
})
return popularGenres.slice(0,5)
}

function getMostPopularBooks(books=[]) {
  const popularBooks = [];
  books.forEach((getBooks)=>{
    const {title,borrows} = getBooks;
    let popular = {name: title, count: borrows.length}
    popularBooks.push(popular);
  })
  popularBooks.sort((borrowA,borrowB)=>{
    return borrowB.count - borrowA.count
  })
  return popularBooks.slice(0,5)
}

function getMostPopularAuthors(books=[], authors=[]) {
  const bigAuthors = [];
  books.forEach((book)=>{
 const{borrows,authorId} = book;
const foundAuthor = findAuthorById(authors,authorId)
const {name: {first,last}} = foundAuthor
const joinednames = joinFirstAndLastNames(first,last)
let authorObj = {name: joinednames, count: borrows.length}
bigAuthors.push(authorObj)
  })
  bigAuthors.sort((authA,authB)=>{
    return authB.count-authA.count;
  })
  return bigAuthors.slice(0,5)
}

function joinFirstAndLastNames(first, last) {
  return `${first} ${last}`;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
