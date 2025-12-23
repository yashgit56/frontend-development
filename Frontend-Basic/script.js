// console.log(this); // refers to window object

// "use strict"; 
// console.log(this); // refers to window object 

// "use strict"; // in non script mode window object , but in strict it is undefined 
// function show() {
//     console.log(this);
// }
// show();


// const user = {
//   name: "Yash",
//   greet() {
//     console.log(this.name);
//   }
// };

// // user.greet(); //refers to user object 

// const greetFunction = user.greet;
// // console.log(greetFunction);
// greetFunction(); // refers to window object or undefined 

// const user = {
//   name: "Yash",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet(); // refers to window object or undefined

// const user = {
//   name: "Yash",
//   greet() {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   }
// };

// user.greet();

function multiply(a, b) {
  return this.a * this.b;
}

const double = multiply.bind(null);
console.log(double(5,6)); // 10

