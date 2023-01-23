function findAuthorById(authors = [], id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books = [], id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books = []) {
  const borrowedBook = [];
  const notBorrowed = [];
  books.forEach((bookObj) => {
    const isReturned = bookObj.borrows.every((borrowObj) => {
      return borrowObj.returned;
    });
    if (isReturned === false) {
      borrowedBook.push(bookObj);
    } else {
      notBorrowed.push(bookObj);
    }
  });
  return [borrowedBook,notBorrowed]
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book
  const borrowedBook = borrows.map((book)=> {
    const borrowingAccount = accounts.find((account)=>{
      return book.id === account.id;
    })
    borrowingAccount.returned = book.returned
    return borrowingAccount
  })
  return borrowedBook.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
