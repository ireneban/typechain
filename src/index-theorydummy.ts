// // interface type
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// same as interface
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// when you use interface thingy
// const person = {
//   name: "david",
//   age: 21,
//   gender: "female"
// };

const david = new Human("David", 21, "female");

// if you put question mark next to a parameter it means it's optional
// const sayHi = (name: string, age: number, gender: string): string => {
//   return `Hello ${name}, you are ${age}, you are a ${gender}!`;
// };

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }!`;
};

console.log(sayHi(david));

export {};
