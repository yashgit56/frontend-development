// Property	Description
// name	Sets or returns an error name
// message	Sets or returns an error message (a string)

// EvalError

// RangeError

let num = 1;

try {
  num.toPrecision(500); // must be between 1 to 100
} catch (err) {
  console.log("Error name: ", err.name, " message: ", err.message);
}

// ReferenceError

try {
  console.log(x);
  let x = 5;
} catch (err) {
  console.log("Error name: ", err.name, " message: ", err.message);
}

try {
  let fname = foo; // foo is not defined
} catch (err) {
  console.log("Error name: ", err.name, " message: ", err.message);
}

// SyntaxError

try {
  eval("console.log('Hello)");
} catch (err) {
  console.log("Error name: ", err.name, " message: ", err.message);
}

// TypeError

let num2 = 1;
// let flag = true;
// let str = "yash";
try {
  num2.toUpperCase(); // only work for string not number
  //   console.log("str: ", str);
} catch (err) {
  console.log("Error name: ", err.name, " message: ", err.message);
}

// URIError

try {
  decodeURI("%%%");
} catch (err) {
  console.log("Error name: ", err.name, " message: ", err.message);
}

const url = "https://example.com/search?query=hello world&lang=en";

const encoded = encodeURI(url);
console.log("Encoded URI: ", encoded);
const decoded = decodeURI(encoded);
console.log("Decoded URI: ", decoded);

if (url === decoded) {
  console.log("Original url and decoded url both are match");
} else {
  console.log("decoded url does not match with original url");
}

// unexpected silent errors

//Example 1

try {
  let x = 1 / 0;
  console.log(x);
} catch (error) {
  console.log("Error name: ", err.name, " message: ", err.message);
}

//Example 2

let result = "Not Active.";
let isActive = false;

if ((isActive = true)) {
  // ❌ Assignment, not comparison
  let result = "Active!";
  console.log(
    "this should not be printed should happen comparision, but actually happen assignment"
  );
} else {
  console.log("this should be printed but this is not");
}

// NaN - no error, just wrong data
const result2 = parseInt("abc");
console.log("Result: ", result2);

// accessing a missing property just returns undefined silently
const user = {};
let result3 = user.name;
console.log("Result3: ", result3);

// return and throw example with try catch block

function trycatch1() {
  try {
    // Code that may cause an error
    return "Return from try block";
  } catch (error) {
    // Code to handle the error
    return "Return from catch block";
  } finally {
    // Code that always runs, no matter what
    return "Return from finally block";
  }
}

function trycatch2() {
  try {
    // Code that may cause an error
    return "Return from try block";
  } catch (error) {
    // Code to handle the error
    return "Return from catch block";
  }
}

function trycatch3() {
  try {
    // Code that may cause an error
    throw new Error("unexpected error");
  } catch (error) {
    // Code to handle the error
    return "Return from catch block";
  }
}

function trycatch4() {
  try {
    // Code that may cause an error
    // process.abort();
    return "Return from try block";
    process.exit(0);
  } catch (error) {
    // Code to handle the error
    return "Return from catch block";
  } finally {
    // Code that always runs, no matter what
    return "Return from finally block";
  }
}

function trycatch5() {
  try {
    // Code that may cause an error
    return "Return from try block";
  } catch (error) {
    // Code to handle the error
    return "Return from catch block";
  } finally {
    // Code that always runs, no matter what
    return "Return from finally block";
  }
}

function trycatch6() {
  trycatch6();
}

console.log(trycatch1());
console.log(trycatch2());
console.log(trycatch3());

console.log(trycatch4());
console.log(trycatch5());
console.log(trycatch6());
