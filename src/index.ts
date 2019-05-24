// interface type
interface Human {
  name: string;
  age: number;
  gender: string;
}
const person = {
  name: "david",
  age: 21,
  gender: "female"
};

// if you put question mark next to a parameter it means it's optional
// const sayHi = (name: string, age: number, gender: string): string => {
//   return `Hello ${name}, you are ${age}, you are a ${gender}!`;
// };

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }!`;
};

console.log(sayHi(person));

export {};
