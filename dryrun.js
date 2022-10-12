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

// const person ={

//   name:`Fred`,
//   age: 23,
//   idNumber: 5515,
// };
// const thirdEmployee = Object.create(person);

// thirdEmployee.info = "Third Employee";

// thirdEmployee.address =  "Tondo street Kilicao Daraga albay";


// for(const props in thirdEmployee){
//   console.log(props + " : " + thirdEmployee[props])
// }
//try to implement Object.propertyIsEnumerable


// console.log(person.propertyIsEnumerable(`age`));

// Object.defineProperty(person, `ssn`,{
// enumerable : true,
// value: ` 123 934 533`


// })

// for(const prop in person){
//   console.log(prop + " : " + person[prop])
// }

// const employee = Object.create(person, {
//   job: {
//       value: 'JS Developer',
//       enumerable: true
//   }
// });






// const secondEmployee = Object.create(person, {
//   info :{
//     value: " Second Employee ",
//     enumerable: true
//   }
// });

// console.log(secondEmployee.info)

// for(const display in secondEmployee){
//   console.log(display + " : " + secondEmployee[display])
// }


// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 25
// };

// person.sss = Object.defineProperty(person,{
//   enumerable: false,
//   value : '1234343'
// })


// const profile = Object.values(person);

// console.log(profile);


const ssn = Symbol(`ssn`);

const person = {
  firstName: 'John',
    lastName: 'Doe',
   age: 25,
[ssn]: `123-3242345`
  };

  const person2 = {
    firstName: 'John',
      lastName: 'Madrona',
     age: 26,
  [ssn]: `123-3242345`
    };

  const kv = Object.entries(person)
console.table(kv);

const ibangPerson = Object.assign({}, person,person2);

console.log(ibangPerson)