var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// memanggil fungsi readBooks berdasarkan data books dengan promise

const readBooks = async () => {
    let time = 10000;
    for (book of books) {
      await readBooksPromise(time, book).then(
        (sisaWaktu) => (time =sisaWaktu)
      );
    }
  };
  
  readBooks();