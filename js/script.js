`use strict`;

// callback functions

function display(result) {
  console.log(result);
}

function add(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

// add(85, 85, display);

// function expression

const sum = function (num1, num2) {
  return num1 + num2;
};

// console.log(sum(85, 15));

// Anonmous Function
(function () {
  console.log(`welcome to the greatstack`);
})();

// setTimeout(function () {
//   console.log(`Hello GreatStack!`);
// }, 3000);

// Recursive function :- A function which call itself again and again it is called recursive function

function myfunction() {
  if (condition) {
    myfunction();
  } else {
    // stop calling function
  }
}
// myfunction();

// printing number from reverse order using recursion

function countDown(num) {
  console.log(num);
  num--;
  if (num > 0) {
    countDown(num);
  }
}
// countDown(50);

// JavaScript Object and Methods

const person = {
  firstName: `Arpit`,
  lastName: `Mishra`,
  age: 25,
  greet: function (name) {
    console.log(`Nice to meet you: ${name}`);
  },
};

// person.greet(`Rohan`);
// person.greeting = person.greet;
// person.greeting("Manish");
// console.log(person);

// Constructor function

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

const person1 = new Person(`Arpit`, `Mishra`);
const person2 = new Person(`Rajesh`, `Sharma`);
// console.log(person1);
// console.log(person2);

// JavaScript Object Prototype

// A Prototype itself is also another object. so the prototype has it's own prototypes.
// This creates a prototype chain.

// Prototype Inheritance
// we can use the prototype to add properties and methods to a constructor function.

function Person1(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Person1.prototype.gender = `Male`;
Person1.prototype.networth = `Billionire`;
Person1.prototype.fullName = function () {
  return this.firstName + ` ` + this.lastName;
};

const person3 = new Person1(`Elon`, `Musk`);
const person4 = new Person1(`Bill`, `Gates`);
// console.log(person3);
// console.log(person4);

// Changing the prototype value

function Person2() {
  this.name = `Elon Musk`;
}

Person2.prototype.age = 28;
const obj1 = new Person2();
// console.log(obj1.age);
Person2.prototype.age = { age: 63 };
const obj2 = new Person2();
// console.log(obj1.age);
// console.log(obj2.age);

// Object destructuring in JavaScript

// Classes in JavaScript:- Classes are one of the features introduced in ES6
// Classes are used as templates to create objects

// Syntax

// class ClassName{
//   constructor(){

//   }
// }

class Person5 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hello: ${this.firstName} + ${this.lastName}`);
  }
  changeName(newName) {
    this.firstName = newName;
  }
}

const person5 = new Person5("Virat", `Kohli`);
// console.log(person5);
// person5.greet();
person5.changeName(`Novak`);
// console.log(person5);

// Getters and Setters in JS
// Getters and Setters are special method in JS that allows you to how properties are accessed and modified.

// A getter is a method that is a called when a property is accessed. it can be used to do things like validate the value of the property or convert it to a different format.

class Person6 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // getters in JS
  // get greet() {
  //   return `Hello ` + this.name;
  // }

  // Setters in JavaScript
  // set changeName(newName) {
  //   this.name = newName;
  // }

  set personName(newName) {
    this.name = newName;
  }

  get personName() {
    return this.name;
  }
}

const person7 = new Person6(`Cristiano Ronaldo`, 38);
// console.log(person7);
// person7.greet;
// console.log(person7.greet);

// A setter is a method that is called when a value is modified.
// it can be used to do things like update the value of the property or perform some other action.
person7.personName = `Lionel Messi`;
// console.log(person7.personName);
// console.log(person7);

// JavaScript Class Expression :- Alternative Method to create a class in JS
// it can be created using as expression

let Person8 = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
};

// JS Class Inheritance :- it allows us to create a new class on the basis of already existing class, using class inheritance a class can use all other existing methods and properties of an existing class.

class Person9 {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person9 {}

const student1 = new Student(`Arpit Mishra`);
// console.log(student1);
// student1.greet();

// Method overriding:- if the parent class and chid class has same method or property name. in the case, when we call the property or method of an object of the child class, it will override the method or property of the parent class. this is known as method overriding or shadowig method.

// static methods:- static methods are bound to the class, not the instance of the class
// you can't call static method on object only on class
class Person10 {
  constructor(name) {
    this.name = name;
  }

  static greet(x) {
    console.log(`Hello ${x.name}`);
  }
}

const person11 = new Person10(`Killian Mbappe`);
// console.log(person11);
// console.log(Person10.greet(person11)); // passing object as parameter to class

// JS Private Methods:- private methods are only accessible through the class not outside the class
// by default the methods in class are public,to make it private we have to use # symbol.

class Person11 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // #fullName() {
  //   // to make the method private inside the class
  //   return this.firstName + ` ` + this.lastName;
  // }
  static #fullName() {
    // to make the method private inside the class
    return this.firstName + ` ` + this.lastName;
  }

  // to call this private method inside the class
  // display() {
  //   console.log(this.#fullName());
  // }
  display() {
    console.log(Person11.#fullName());
  }
  
}

const person12 = new Person11(`Rafael`, `Nadal`);
// console.log(person12.display());

// we can make this private method static also
