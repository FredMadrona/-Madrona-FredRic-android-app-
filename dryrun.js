// function getBrand(prefix){
//   console.log( prefix + this.brand);
// }

// let honda = {
//   brand : 'Honda'
// }

// let audi = {
//   brand: 'Audi'
// }

// getBrand.call(honda, "It's a ");
// getBrand.call(audi, "It's an ");

const person ={

  name:`Fred`,
  age: 23,
  idNumber: 5515,
}

for(const prop in person){
  console.table(person[prop])
}