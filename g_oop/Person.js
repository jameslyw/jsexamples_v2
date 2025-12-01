// a) create a person object
const person = {name: "John"};
console.log(person);

//b b) create person object
function Person(fName, lName){
    this.firstName = fName;
    this.lastName = lName;
}

// instantiating new person objects
const person1 = new Person("John","Doe");
const person2 = new Person("Steve", "Smith");

console.log(person1);
console.log(person2);

// c) add a new property to a Person constructor function
Person.prototype.gender = "Male";
Person.prototype.membership = "Basic";

// what is the outcome when i print out person1 and person2?
console.log(person1.gender);
console.log(person2.gender);

person2.gender = "Female";
person2.membership = "Premium";

// d) Introduce a new method to Person
Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
};

Person.prototype.getMembership = () => {
    return `Type: ${this.membership}`;
};


console.log(person1.gender);
console.log(person2.gender);

console.log(person1.firstName, person1.lastName, person1.membership);
console.log(person2.firstName, person2.lastName, person2.membership);

console.log(person1.getFullName() + " " + person1.membership);
console.log(person2.getFullName() + " " + person1.membership);

function animal(limbs,species){
    this.limb = limbs;
    this.species = species;
}

const iguana = new animal(4, "lizard");
console.log("Iguana Limbs:", iguana.limb, "Iguana Species:", iguana.species);