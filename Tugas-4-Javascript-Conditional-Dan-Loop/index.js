// soal 1 + Jawaban

console.log('-------------------------------');

var nilai = 75;
var indeks = ""

if(nilai >= 85) {
    indeks = " nilai A."
} else if(nilai >= 75 < 85) {
    indeks = " nilai B."
} else if(nilai >= 65 < 75) {
    indeks = " nilai C."
} else if(nilai >= 55  < 65) {
    indeks = " nilai D."
}  else if(nilai < 55) {
    indeks = " nilai E."
}

console.log(indeks);

console.log('-------------------------------');

// soal 2 + Jawaban

var tanggal = 8;
var bulan = 6;
var tahun = 2002;

switch(bulan) {
    case 1:   { console.log(tanggal , 'Januari' , tahun); break; }
    case 2:   { console.log(tanggal , 'Febuari' , tahun); break; }
    case 3:   { console.log(tanggal , 'Maret' , tahun); break; }
    case 4:   { console.log(tanggal , 'April' , tahun); break; }
    case 5:   { console.log(tanggal , 'Mei' , tahun); break; }
    case 6:   { console.log(tanggal, 'Juni' , tahun); break; }
    default:  { console.log('Tanya RT Kalo Kaga Tau Lahir'); }}

console.log('-------------------------------');

    /// soal tiga + Jawaban
var pager = '';
for (var n = 0; n < 3; n++){
    console.log(pager = pager + '#');
}

console.log('-------------------------------');


var n = "#"
while(n.length <=7 ){
    console.log(n);
    n = n + "#"; 
}


console.log('-------------------------------');


    /// soal empat + Jawaban 

    
    var m = 10
    for (var m = 1; m <= 10; ++m)
    // for(var m = 1; m <= m ; m++)
    {
      if ( m%3 === 1 )
      {
        console.log( m + " - i love programming" );
      }
      else if ( m%2 === 0 ) 
      {
        console.log(m+ " - i love VueJS " );
      }
      else if ( m%1 === 0 ) 
      {
        console.log(m+ " - i love javacript " );
      }
      else
      {
        console.log(m);
      
      }
    }