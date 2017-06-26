/**
 * Class Decorator and Method Decorator examples.
 */
// Class Decorator without Parameters.
function VehicleDecorator(target: Function) {
    console.log("Class Decorator called on ", target);
}

// Class Decorator with Parameters.
function VehicleParamDecorator(val1: string, val2:string) {
    return function(target: Function) {
        console.log(`VehicleParamDecorator with ${val1} and ${val2} called on ${target}`);
    }
}

/**
 * Method Decorator.
 * @param {Object}                       target      [description]
 * @param {string}                       propertyKey [description]
 * @param {TypedPropertyDescriptor<any>} descriptor  [description]
 */
function MethodDecorator (
    target: Object,  // The prototype of the class
    propertykey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("Mehod Decorator called on", target, propertykey, descriptor);
}

@VehicleParamDecorator("a",'b') // Calling class decorator with params.
@VehicleDecorator // Calling class decorator.
class VehicleClass {
    name: string;

    constructor() {
        this.name = "BMW";
    }
    @MethodDecorator // Calling methode decorator.
    displayVehicleDetails () {
    }
}