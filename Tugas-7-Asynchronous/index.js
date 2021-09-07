var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// memanggil fungsi readBooks berdasarkan data books dengan callback

readBooks(10000, books[0], (item) => {
    readBooks(item, books[1], (item) => {
        readBooks(item, books[2], (item) => {
             readBooks(item, books[3], (item) => {
        console.log("sisa waktu membaca saya adalah :", item  );
             });
        });
    });
});