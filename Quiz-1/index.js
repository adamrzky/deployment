//// soal 1
//// Judul : Function Penghitung Jumlah Kata

var kata_1 = " Halo nama saya Muhammad Iqbal Mubarok "
var kata_2 = "Saya Iqbal"

kalimat(kata_1)
kalimat(kata_2)

function kalimat(kata){
    var kalimat = kata.split(' ')
    kalimat = kalimat.filter(function(index){
        return index != "";
     })
    console.log ("Berjumlah " , kalimat.length , " Kata ")
}


console.log('-------------------------------');


//// soal 2 
//// Judul : Function Penghasil Tanggal Hari Esok

//

var tgl = 28
var bln = 2
var thn = 2021

var date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
function next_date(tgl, bln, thn){
    var months = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];
    var selectedMonthName = months[bln-1];
    var combine = selectedMonthName + '/' + tgl.toString() + '/' + thn.toString();
    var d = new Date(combine);
    d.setDate(d.getDate() + 1);
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}
var result = next_date(tgl, bln, thn);
console.log( "Tanggal Esok Adalah : " , result);
