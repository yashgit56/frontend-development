// TypeScript is a syntactic superset of JavaScript which adds static typing.
var _a;
// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
// Why should I use TypeScript?
// JavaScript is a loosely typed language.
// It can be difficult to understand what types of data are being passed around in JavaScript.
// In JavaScript, function parameters and variables don't have any information!
// So developers need to look at documentation, or guess based on the implementation.
// TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
// For example, TypeScript will report an error when passing a string into a function that expects a number.
// JavaScript will not.
// Typescript uses compile type type checking 
// it transpiles the typescript code into javascript at runtime 
var temp = "Hello World";
console.log("Temp: ", temp);
//boolean 
var isActive = true;
var hasPermission = false;
console.log("isActive type: ", typeof isActive);
console.log("hasPermission type: ", typeof hasPermission);
// number 
var decimal = 6;
var hex = 0xf00d; // Hexadecimal
var binary = 10; // Binary
var octal = 484; // Octal
var float = 3.14;
// string 
var color = "blue";
var fullName = 'John Doe';
var age = 30;
var sentence = "Hello, my name is ".concat(fullName, " and I'll be ").concat(age + 1, " next year.");
// bigint 
var bigNumber = 9007199254740991n;
var hugeNumber = BigInt(9007199254740991); // Alternative syntax
// symbol 
var uniqueKey = Symbol('description');
var obj = (_a = {},
    _a[uniqueKey] = 'This is a unique property',
    _a);
console.log(obj[uniqueKey]); // "This is a unique property"
