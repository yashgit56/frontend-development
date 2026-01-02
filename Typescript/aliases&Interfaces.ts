// Try creating a new Car using the alias provided
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

console.log(car);

// union & intersections

type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";

// interfaces

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

// Type vs Interface: Key Differences
// Extending: Both can be extended, but interfaces support declaration merging.
// Unions/Intersections: Only type aliases support union and intersection types.
// Implements: Classes can implement either.
// Recommendation: Use interface for objects, type for everything else.
// Best Practices:

// Use interface for defining object shapes and public APIs.
// Use type for unions, intersections, and primitives.
// Favor composition over inheritance for types.
// Document your types and interfaces for clarity.
// Common Pitfalls:

// Using type when you need declaration merging (use interface).
// Overcomplicating types—keep them simple and focused.
// Forgetting to update types/interfaces as code evolves.

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode("404");
