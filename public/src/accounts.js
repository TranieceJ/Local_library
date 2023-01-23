function findAccountById(accounts = [], id = null) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    return accountA.name.last < accountB.name.last ? -1 : 1;
  });
}

function getTotalNumberOfBorrows(account = [], books = []) {
  const borrowingAccount = account.id;
  let total = 0;
  books.filter(book => book.borrows.forEach(borrowed=> borrowingAccount === borrowed.id && total++))
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach((book) => {
    let borrowed = book.borrows;
    if (
      borrowed.find(
        (borrow) => borrow.id === account.id && borrow.returned === false
      )
    ) {
      result.push(book);
    }
  });
  result.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    book.author = author;
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
