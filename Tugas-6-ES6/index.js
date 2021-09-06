console.log('-------------------------------');
/// Soal 1 

//  Luas 
const luas = (a, b) => {
    let p = a;
    let l = b;
    return p * l;
  };
  //  Keliling 
  const keliling = (c, d) => {
    let p = c;
    let l = d;
    return 2 * (p + l);
  };
  console.log('Luas Persegi Adalah : ' , luas(10, 20));
  console.log('Keliling Persegi Adalah : ' ,keliling(10, 20));


console.log('-------------------------------');


/// Soal 2

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => { console.log(`${firstName} ${lastName}`) }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()


/// Soal 3

const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
}

const {firstName,lastName,address,hobby} = newObject
console.log(firstName, lastName, address, hobby)

console.log('-------------------------------');


/// Soal 4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east];
//Driver Code
console.log(combined)

console.log('-------------------------------');
/// Soal 5

const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + 'dolor sit amet, ' + 'consectetur adipiscing elit,' + planet;
var after = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}`;
// console.log(before);
console.log(after);

console.log('-------------------------------');