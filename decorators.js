var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Class Decorator and Method Decorator examples.
 */
// Class Decorator without Parameters.
function VehicleDecorator(target) {
    console.log("Class Decorator called on ", target);
}
// Class Decorator with Parameters.
function VehicleParamDecorator(val1, val2) {
    return function (target) {
        console.log("VehicleParamDecorator with " + val1 + " and " + val2 + " called on " + target);
    };
}
/**
 * Method Decorator.
 * @param {Object}                       target      [description]
 * @param {string}                       propertyKey [description]
 * @param {TypedPropertyDescriptor<any>} descriptor  [description]
 */
function MethodDecorator(target, // The prototype of the class
    propertykey, // The name of the method
    descriptor) {
    console.log("Mehod Decorator called on", target, propertykey, descriptor);
}
var VehicleClass = (function () {
    function VehicleClass() {
        this.name = "BMW";
    }
    VehicleClass.prototype.displayVehicleDetails = function () {
    };
    return VehicleClass;
}());
__decorate([
    MethodDecorator //
], VehicleClass.prototype, "displayVehicleDetails");
VehicleClass = __decorate([
    VehicleParamDecorator("a", 'b'),
    VehicleDecorator
], VehicleClass);
