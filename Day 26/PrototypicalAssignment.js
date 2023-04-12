// 1. Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (an array).
class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.favoriteFoods = favoriteFoods;
    }
// 2. Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    fullName() {
        return  `Full name: ${this.firstName} ${this.lastName}`;
    }
// 3. Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
    toString() {
        return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
    }
};
// 4. Add a property on the Person object called family which is an empty array.
Person.prototype.family = [];
// 5. Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array.
// To make sure that the object you are adding is an object constructed from the Person constructor - take a look at the instanceofoperator.
// Make sure that your family array does not include duplicates! This method should return the length of the family array.
Person.prototype.addToFamily = function(FamMember) {
    if(FamMember instanceof Person && !this.family.includes(FamMember)) {
        this.family.push(FamMember);
    }
        console.log(this.family);
    return this.family.length;
    };
// Test this using several console logs for properties and methods.

let Kenny = new Person("Kenny", "McCormick", "Orange", 7, ["Tacos","Pizza"]);
let Stan = new Person("Stan", "McCormick", "Blue", 13, ["Pizza","French Fries",]);
let Kyle = new Person("Kyle", "McCormick", "Green", 10, ["Pizza","Chicken Nuggets"]);
let Eric = new Person("Eric", "McCormick", "Red", 12, ["Pizza","Fried Chicken"]);

console.log(Kenny.fullName())
console.log(Kenny.toString())


console.log(Kenny.addToFamily(Stan))
console.log(Kenny.addToFamily(Kyle))
console.log(Kenny.addToFamily(Eric))
console.log(Kenny.famly)

console.log(Kenny instanceof Person)
console.log(Stan instanceof Person)
console.log(Kyle instanceof Person);
console.log(Eric instanceof Person);
