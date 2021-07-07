function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
}

const Jorge = new Person("Tatiana");
Jorge.greet();

// Call Apply y bind

function greet(number) {
  console.log(`Hello, my name is ${this.name}, my phone number is ${number}`);
}

const np = {
  name: "Tatiana"
}

greet.call(np, 1235);

const testGreet = greet.bind(np);
testGreet(98766);

// Prototype

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
}

const Tatiana = new Person("Tatiana");

// Getters and Setters

const person = {
  name: "NN",
  age: 22,
  get info() {
    return this.name;
  },
  set info(newName) {
    this.name = newName;
  },
}
person.info = "Tatiana"
console.log(person.info);

//---

const person2 = {
  name: "NN",
  age: 22
}

Object.defineProperty(person2, 'info', {
  get: function() {
    return this.name;
  },
  set: function(newName) {
    this.name = newName;
  }
})

person2.info = "Tatiana"
console.log(person2.info);
