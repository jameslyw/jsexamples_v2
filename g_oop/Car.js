import Vehicle from "./Vehicle.js";

/* const Vehicle = require("./Vehicle.js"); */

// Create a child class (Car) from vehicle class
class Car extends Vehicle { // INHERITS the vehicle class

    // constructor
    constructor(make, model, year) {

        super(make, model, year); //super (keyword) - refer to the parent class
        this.airbag = true;     //unique to cars
    }
    // a static method of a
    //  class can be used without instantiation
    static welcomeStatement(msg){
        console.log(msg);
    }

    //polymorphism (override and specialising the parent method)
    drive(distance) {
        super.travel(distance); // abstraction - drive method hides the implementation (travel)
        console.log(`Driving complete. Status: ${this.airbag ? 'Safety Check Passed.' : 'Airbag absent'}`);
    }


    //check safetyfeature() is only found in Car class
    checkSafetyFeature(){
    return this.airbag;
    }

    // ? IMPLICIT INHERITANCE methods inherited here in Car Class (from Vehicle class) include:
    // - travel()
    // - getTotalDistance() - Encapsulation, where we do not see the implementation of getTotalDistance(), yet we can invoke it.
    // - distanceTraveled - Encapsulation, where the state of the property is managed by the parent class

    

}

// Instantiate a new instance of a car called myNewCar

Car.welcomeStatement("\n**********\nWelcome Car Owner\n*********\n");

const myNewCar = new Car("Honda", "Civic", "2024");
myNewCar.drive(800);
console.log(`Does my new car have safety feature: ${myNewCar.checkSafetyFeature()}`);
console.log(`My new car has driven ${myNewCar.getTotalDistance()} km.`)

const mySecondNewCar = new Car("Toyota", "Vios", "2015");
//console.log(myNewCar);


//module.exports = Car; // Export the class Car
export default Car;