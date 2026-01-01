// function temp() {
//   let temp = 0;
//   return function () {
//     temp++;
//     return temp;
//   };
// }

// let increment = temp2();
// let add = temp2();
// let val1 = increment();
// let val2 = increment();
// let val3 = add();

// console.log("value 1:", val1);
// console.log("value 2:", val2);
// console.log("value 3:", val3);

function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    },
    get count() {
      return count;
    },
    set count(val) {
      count = val;
    },
  };
}

let add = counter();
console.log("value: ", add);
temp3 = add.increment();
console.log("value: ", temp3);
temp3 = add.increment();
console.log("value: ", temp3);
temp3 = add.decrement();
console.log("value: ", temp3);
add.count = 0;
console.log(" variable: ", add.count);
console.log("value: ", temp3);
temp3 = add.increment();
console.log("value: ", temp3);
temp3 = add.increment();
console.log("value: ", temp3);
temp3 = add.increment();
console.log("value: ", temp3);
temp3 = add.increment();
console.log("value: ", temp3);
temp3 = add.increment();
console.log("value: ", temp3);
temp3 = add.increment();
console.log("value: ", temp3);
