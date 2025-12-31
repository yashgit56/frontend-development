// A Promise can have 3 states:

// pending	initial state
// rejected	operation failed
// fulfilled	operation completed

// let myPromise = new Promise(function (myResolve, myReject) {
//   let result = false;

//   if (result === true) {
//     myResolve("Fulfilled");
//   } else {
//     myReject("Failed");
//   }
// });

// myPromise.then(
//   (x) => {
//     console.log(x);
//   },
//   (x) => {
//     console.log("Error: ", x);
//   }
// );

// Examples of Promise

// let myPromise = new Promise(function (myResolve, myReject) {
//   let pass = false;

//   if (pass) {
//     setTimeout(function () {
//       myResolve("Hello Learning Promise");
//     }, 3000);
//   } else {
//     setTimeout(function () {
//       myReject("Getting Confused in some concepts");
//     }, 3000);
//   }
// });

// myPromise
//   .then(function (value) {
//     console.log("Fulfilled Promise: ", value);
//   })
//   .catch((err) => {
//     console.log("Rejected Value: ", err);
//   })
//   .finally(() => {
//     console.log("Finally moved to next promise example");
//   });

// console.log("Promise.all() example");

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "second failed");
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "first failed");
// });

// Promise.all([promise1, promise2, promise3, promise4]).then(
//   (results) => {
//     console.log("Results: ", results);
//   },
//   (error) => {
//     console.log("Some Error Occured: ", error);
//   }
// );

// Expected output: Array [3, 42, "foo"]

// console.log("Promise.allSettled() example");

// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });

// console.log("MyPromise1: ", myPromise1);
// console.log("MyPromise2: ", myPromise2);

// // Settle All
// Promise.allSettled([myPromise1, myPromise2]).then((results) =>
//   results.forEach((x) => console.log(x))
// );

// function myDisplay(some) {
//   console.log(some);
// }

// Promise.fromResolvers();

// function complexAsyncTask(data) {
//   if (!Promise.fromResolvers) {
//     Promise.fromResolvers = function () {
//       let resolve, reject;
//       const promise = new Promise((res, rej) => {
//         resolve = res;
//         reject = rej;
//       });
//       return { promise, resolve, reject };
//     };
//   } else {
//     const { promise, resolve, reject } = Promise.fromResolvers();
//   }

//   setTimeout(() => {
//     // complex logic
//     const processed = data
//       .filter((n) => n > 10)
//       .map((n) => n * 2)
//       .reduce((a, b) => a + b, 0);

//     if (processed > 50) {
//       resolve({ success: true, value: processed });
//     } else {
//       reject({ success: false, reason: "Value too small" });
//     }
//   }, 1000);

//   return promise;
// }

// // Usage
// complexAsyncTask([5, 20, 30]).then(console.log).catch(console.error);
// const results = await Promise.allSettled([
//   Promise.resolve(10),
//   Promise.reject("Error"),
//   Promise.resolve(30),
// ]);

// console.log(results);

const promise1 = Promise.reject(new Error("error"));
const promise2 = new Promise((reject) => setTimeout(reject, 1000, "quick"));
const promise3 = new Promise((reject) =>
  setTimeout(reject, 500, "slow but not so slow")
);

const promises = [promise1, promise2, promise3];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((err) => console.log("Some error occured"));
