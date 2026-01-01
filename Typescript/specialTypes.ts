// These special types are part of TypeScript's type system and help make your code more type-safe and self-documenting.

// 1. Type any
// The any type is the most flexible type in TypeScript.

// It essentially tells the compiler to skip type checking for a particular variable.

// While this can be useful in certain situations, it should be used sparingly as it bypasses TypeScript's type safety features.

// When to use any:

// When migrating JavaScript code to TypeScript
// When working with dynamic content where the type is unknown
// When you need to opt out of type checking for a specific case

let u: any = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
console.log(Math.round(u)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// 2. Type unknown

// Key differences between unknown and any:

// unknown must be type-checked before use
// You can't access properties on an unknown type without type assertion
// You can't call or construct values of type unknown

let w: unknown = 1;
w = "string"; // no error

w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  },
} as { runANonExistentMethod: () => void };

// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.

if (typeof w === "object" && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

// When to use unknown:

// When working with data from external sources (APIs, user input, etc.)
// When you want to ensure type safety while still allowing flexibility
// When migrating from JavaScript to TypeScript in a type-safe way

// 3. Type: never
// The never type represents the type of values that never occur.

// It's used to indicate that something never happens or should never happen.

// Common use cases for never:

// Functions that never return (always throw an error or enter an infinite loop)
// Type guards that never pass type checking
// Exhaustiveness checking in discriminated unions

// 1. function that never returns
function throwError(message: string): never {
  throw new Error(message);
}

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

let c: Circle = { kind: "circle", radius: 4 };
let s: Square = { kind: "square", sideLength: 4 };
let t: Triangle = { kind: "triangle", base: 4, height: 5 };
console.log(getArea(c));
console.log(getArea(s));
console.log(getArea(t));

// Basic never type (throws error when assigned)
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// 4. Type: undefined & null
// In TypeScript, both undefined and null have their own types, just like string or number.

// By default, these types can be assigned to any other type, but this can be changed with TypeScript's strict null checks.
let y: undefined = undefined;
let z: null = null;

// Optional parameter (implicitly `string | undefined`)
function greet(name?: string) {
  return `Hello, ${name || 'stranger'}`;
}

// Optional property in an interface
interface User {
  name: string;
  age?: number; // Same as `number | undefined` }
}