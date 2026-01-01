// Function with explicit parameter and return types
// explicit type cast
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
// greet(42);     // Compile Time Error: Argument of type '42' is not assignable to parameter of type 'string'

// TypeScript infers 'string'
let username = "alice";

// TypeScript infers 'number'
let score = 100;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
  return a + b;
}

console.log("username: ", typeof username);
console.log("score: ", typeof score);
console.log("flags: ", typeof flags);
console.log("add: ", typeof add);

// Note: Type inference works best when variables are initialized at declaration.

// Uninitialized variables have type 'any' by default unless you enable strictNullChecks in your tsconfig.json.

// TypeScript infers the shape of the object
const user = {
  name: "Alice",
  age: 30,
  isAdmin: true,
};

// TypeScript knows these properties exist
console.log(user.name); // OK
// console.log(user.email); // Error: Property 'email' does not exist

// Watch Out: While type inference is convenient, being explicit with types can make your code more maintainable, especially in larger codebases or public APIs.

// Type Safety in Action
// One of TypeScript's main benefits is catching type-related errors during development.

// Let's look at how TypeScript helps prevent common mistakes.

// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{ "name": "Alice", "age": 30 }');
console.log(typeof data);
console.log(data);

// 2. Variables declared without initialization
let something: any; // Type is 'any'
console.log(typeof something);
something = "hello";
console.log(typeof something);
something = 42;
console.log(typeof something); // No error
console.log(something);
