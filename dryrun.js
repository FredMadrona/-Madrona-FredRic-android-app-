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


// const ssn = Symbol(`ssn`);

// const person = {
//   firstName: 'John',
//     lastName: 'Doe',
//    age: 25,
// [ssn]: `123-3242345`
//   };

  // const person2 = {
  //   firstName: 'John',
  //     lastName: 'Madrona',
  //    age: 26,
  // [ssn]: `123-3242345`
  //   };

//   const kv = Object.entries(person)
// console.table(kv);

// const ibangPerson = Object.assign({}, person,person2);

// console.log(ibangPerson)

//trying object destructuring
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   currentAge: 28
// };

// let { firstName, lastName, middleName = 'pangit', currentAge: age = 18 } = person;


// const getFullname = (fName, lName) => console.log(fName+" "+ lName);

// getFullname(firstName,lastName);

// console.log(middleName); // ''
// console.log(age); // 28

/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
 */

/***
 * Practicing JavaScript Optional Chaining
 */

// function getUser(id) {

//   if(id <= 0) {
//       return null;
//   }

//   // get the user from database
//   // and return null if id does not exist
//   // ...
  
//   // if user was found, return the user
//   return {
//       id: id,
//       username: 'admin',
//       profile: {
//           avatar: '/avatar.png',
//           language: 'English',
//           talent: 'singing'

//       }
//   }
// }

// let user = getUser(-1);
// let avatar = user ?. profile ?. avatar;

// console.log(profile);

// let file = {
//   read() {
//       return 'file content';
//   },
//   write(content) {
//       console.log(`Writing ${content} to file...`);
//       return true;
//   }
// };

// let compressedData = file.compress?.();

// console.log(compressedData);
// function createMachine(name, status) {
//   return {
//       name,
//       status
//   };
// }

// const sample = createMachine('printer');
// let name = 'machine name';
// let machine = {
//     [name]: 'server',
//     'machine hours': 10000
// };

// console.log(machine[name]); // server
// console.log(machine['machine hours']); // 10000


/**
 * Learned about Classes, Getters, and Setters 
 */
// let meeting = {
//   attendees: [],
//   add(attendee) {
//       console.log(`${attendee} joined the meeting.`);
//       this.attendees.push(attendee);
//       return this;
//   },
//   get latest() {
//       let count = this.attendees.length;
//       return count == 0 ? undefined : this.attendees[count - 1];
//   }
// };

// meeting.add('Peter').add('Jane').add('John');
// console.log(`The latest attendee is ${meeting.latest}.`);

class Person {
  constructor(name) {
      this.setName(name);
  }
  getName() {
      return this.name;
  }
  setName(newName) {
      newName = newName.trim();
      if (newName === '') {
          throw 'The name cannot be empty';
      }
      this.name = newName;
  }
}

let person = new Person('Jane Doe');
console.log(person); // Jane Doe

person.setName('Jane Smith');
console.log(person.getName()); // Jane Smith
