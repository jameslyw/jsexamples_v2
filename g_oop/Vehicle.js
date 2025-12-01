// create a class called vehicle
class Vehicle{
    
    // constructor (keyword)
    // this (keyword)
    // a constructor is called when a new instance of the class is created
/*     constructor(make, model, year,){
        this.make = make;
        this.model = model;
        this.year = year;
        this.distanceTraveled = 0; // default value for all new instance
    
    } */

    // Overloaded constructor - only allows one constructor
    constructor(make, model, year, distanceTraveled){
        this.make = make;
        this.model = model;
        this.year = year;
        this.distanceTraveled = distanceTraveled ? distanceTraveled : 0; // default value for all new instance
    };

    // method common to all vehicles
    travel(distance){
        this.distanceTraveled += distance; // cummulatively add distances passed in
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} units (km).`);
    }
    // method to get the total distance travelled
    getTotalDistance(){
        return this.distanceTraveled;
    }
}
/* const myTransport = new Vehicle("Toyota", "Raize", "2022"); // car
//const myTransport2 = new Vehicle("Honda", "Super4", "1994"); //motorcycle
myTransport.travel(100); //yesterday 100km
myTransport.travel(50); //today 50km


const myTransport2 = new Vehicle("Honda", "Vezel", "2013"); // car
myTransport2.travel(1000); //yesterday 100km
myTransport2.travel(500); //today 50km



console.log(`My Transport has travelled a total of ${myTransport.getTotalDistance()} km.`);

console.log(`My Transport has travelled a total of ${myTransport2.getTotalDistance()} km.`); */

module.exports = Vehicle; //class Vehicle is exported 