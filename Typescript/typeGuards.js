// TypeScript Type Guards are powerful constructs that allow you to narrow down the type of a variable within a specific scope.
// They help TypeScript understand and enforce type safety by providing explicit checks that determine the specific type of a variable at runtime.
// Type Guard Patterns
// typeof type guards
// instanceof type guards
// User-defined type guards with type predicates
// Discriminated unions with literal types
// in operator type guards
// Type assertion functions
// typeof type guard
// Simple type guard with typeof
function formatValue(value) {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        return value.trim().toUpperCase();
    }
    else {
        // TypeScript knows value is number here
        return value.toFixed(2);
    }
}
// Example usage
var result1 = formatValue("  hello  "); // "HELLO"
var result2 = formatValue(42.1234); // "42.12"
// instanceof Type Guards
// The instanceof operator checks if an object is an instance of a specific class or constructor function.
// It's useful for narrowing types with custom classes or built-in objects.
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Flying...");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("Swimming...");
    };
    return Fish;
}());
function move(animal) {
    if (animal instanceof Bird) {
        // TypeScript knows animal is Bird here
        animal.fly();
    }
    else {
        // TypeScript knows animal is Fish here
        animal.swim();
    }
}
// Type predicate function
function isCar(vehicle) {
    return vehicle.type === undefined;
}
// function displayVehicleInfo(vehicle: Car | Motorcycle) {
//   console.log(
//     `Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`
//   );
//   if (isCar(vehicle)) {
//     // TypeScript knows vehicle is Car here
//     console.log("This is a car");
//   } else {
//     // TypeScript knows vehicle is Motorcycle here
//     console.log(`This is a ${vehicle.type} motorcycle`);
//   }
// }
// discriminated unions
// Discriminated unions (also known as tagged unions) use a common property (the discriminant) to distinguish between different object types in a union.
// This pattern is particularly powerful when combined with type guards.
// Best Practices
// When to Use Each Type Guard
// Use typeof for primitive types (string, number, boolean, etc.)
// Use instanceof for class instances and built-in objects
// Use user-defined type guards for complex validation logic
// Use discriminated unions for related types with a common discriminant
// Use the in operator for checking property existence
// Use type assertion functions for runtime validation with errors
// assertion functions
function assertIsString(value) {
    if (typeof value !== "string") {
        throw new Error("Value is not a string");
    }
}
assertIsString("Hello");
// assertIsString(32);
