/* ################################################################### */

// soal satu

var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";


var satu = pertama.substring( 0 , 4 )
var dua = pertama.substr( 12 , 6 )
var tiga = kedua.substring(0 , 7 )
var empat = kedua.substring( 8 , 18 )
var patGede = empat.toUpperCase();

/// jawaban soal satu
var gabung = satu.concat(" ",dua, " ",  tiga , " ", patGede);
console.log(gabung)

/* ################################################################### */


/// soal dua 

var kataPertama = 10 ;
var kataKedua = 2 ;
var kataKetiga = 4 ;
var kataKeempat = 6 ;

/// jawaban soal dua

var jumlah = ( kataPertama + kataKeempat  ) + ( kataKedua * kataKetiga ) ;
console.log(jumlah)




/* ################################################################### */



/// soal tiga 

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring (4 , 14 );
var kataKetiga = kalimat.substring ( 15 , 18  );
var kataKeempat = kalimat.substring ( 19 , 24 );
var kataKelima = kalimat.substring ( 25 );

/// jawaban soal tiga

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);





/* ################################################################### */