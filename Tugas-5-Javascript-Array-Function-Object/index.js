/// Soal 1 + Jawaban 
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
var urut = daftarHewan.sort()
 urut.forEach(function(index){
     console.log(index)
 });    

 console.log('-------------------------------');

/// Soal 2 + Jawaban 
function introduce(data) {
    var name = data.name;
    var age = data.age;
    var address = data.address;
    var hobby = data.hobby;
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}

var data = {
    name: "John",
    age: 30,
    address: "Jalan Pelesiran",
    hobby: "Gaming"
}

var perkenalan = introduce(data);

console.log(perkenalan)

console.log('-------------------------------');

/// Soal 3 + Jawaban 
function hitung_huruf_vokal(masukanKata){
    masukanKata.split("");
    var vokal = ["a", "e", "i", "o", "u"]
    var jumlahHurufVokal = 0;
    for(var i = 0;  i < masukanKata.length; i++){
        if (vokal.indexOf(masukanKata.toLowerCase()[i]) !== -1){
            jumlahHurufVokal++}
    } return jumlahHurufVokal;
}

var hitung_1 = hitung_huruf_vokal("Muhammad") // 3
var hitung_2 = hitung_huruf_vokal("Iqbal") // 2

console.log(hitung_1, hitung_2)

console.log('-------------------------------');

/// soal 4 + Jawaban 
function hitung(i){
    return (i - 1) * 2
}

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8