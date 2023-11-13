/* 
Filename: ComplexCode.js
Description: A complex and elaborate code in JavaScript that demonstrates advanced programming concepts and techniques.
*/

// A class representing a Person with name and age properties
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// A class representing a Vehicle with make, model, and year properties
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

// A subclass of Vehicle representing a Car
class Car extends Vehicle {
  constructor(make, model, year, color) {
    super(make, model, year);
    this.color = color;
  }

  getDetails() {
    return `${super.getDetails()}, Color: ${this.color}`;
  }
}

// An array of Person objects
const people = [
  new Person("John Doe", 25),
  new Person("Jane Smith", 32),
  new Person("Mike Johnson", 45),
];

// An array of Vehicle objects
const vehicles = [
  new Vehicle("Toyota", "Camry", 2020),
  new Vehicle("Honda", "Accord", 2019),
  new Vehicle("Ford", "Mustang", 2018),
];

// An array of Car objects
const cars = [
  new Car("Tesla", "Model S", 2021, "Red"),
  new Car("BMW", "X5", 2020, "Black"),
  new Car("Audi", "A8", 2019, "Silver"),
];

// Function to find the oldest person in the people array
function findOldestPerson(people) {
  let oldestPerson = people[0];
  for (let i = 1; i < people.length; i++) {
    if (people[i].age > oldestPerson.age) {
      oldestPerson = people[i];
    }
  }
  return oldestPerson;
}

// Function to print details of each person in the people array
function printPeopleDetails(people) {
  console.log("People Details:");
  for (let person of people) {
    console.log(person.getDetails());
  }
}

// Function to print details of each vehicle in the vehicles array
function printVehicleDetails(vehicles) {
  console.log("Vehicle Details:");
  for (let vehicle of vehicles) {
    console.log(vehicle.getDetails());
  }
}

// Function to print details of each car in the cars array
function printCarDetails(cars) {
  console.log("Car Details:");
  for (let car of cars) {
    console.log(car.getDetails());
  }
}

// Main program
console.log("Complex Code Example");
console.log("====================");
console.log("");

const oldestPerson = findOldestPerson(people);
console.log("Oldest Person:");
console.log(oldestPerson.getDetails());
console.log("");

printPeopleDetails(people);
console.log("");

printVehicleDetails(vehicles);
console.log("");

printCarDetails(cars);
console.log("");

console.log("End of Program.");
console.log("================");