//@ts-check
const { thrice, add, subtract, multiply, divide } = require("./calculate");

/**
 * @file index.js is the root file for this example app
 * @author Om Kakatkar
 * @see <a href="https://omkakatkar-portfolio.netlify.app/">Portfolio</a>
 */

/**
 * My Name
 * @type {string}
 */
const myName = "Om Kakatkar";

/**
 * Age
 * @type {number}
 */
const age = 21;
/**
 * Languages
 * @type {Array<string>}
 */
const languages = ["Html", "CSS", "JS"];
/**
 * Todo
 * @type {{id:number,text:string}}
 */
const todo = {
  id: 1,
  text: "none",
};

/**
 *
 * @param {number} num - Takes in a number
 * @returns {number} - Twice the number
 */
const twice = (num) => num * 2;

/**
 * A person
 * @typedef {Object} Person
 * @property {number} id - Person ID
 * @property {string} name - Person name
 * @property {string|number} [age] - Person age (optional)
 * @property {boolean} isEmployed - Person is employed
 */

/**
 * @type {Person}
 */
const person = {
  id: 1,
  name: "Kirito",
  age: 2000,
  isEmployed: true,
};

/**
 * Class to create a animal object
 */

class Animal {
  /**
   *
   * @param {Object} animalInfo  Information about the animal
   */
  constructor(animalInfo) {
    /**
     * @property {string} name Animal's name
     */
    this.name = animalInfo.name;
    /**
     * @property {string} species Animal Species
     */
    this.species = animalInfo.species;
  }
  /**
   * @property {Function} greet A greeting with name and species
   * @returns {void} Nothing returned
   */
  greet() {
    console.log(`This is ${this.name}-san!! They are a ${this.species}`);
  }
}

/**
 * Animal one
 * See {@link Animal}
 */
const animal1 = new Animal({
  name: "Bunny",
  species: "Rabbit",
});
console.log(animal1.greet());

console.log(add(2000, 300));

//TODO: add documentation to some project to practice.
// FIXME: I did it
