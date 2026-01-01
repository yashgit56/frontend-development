// typescript arrays
var names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
var names2 = ["Dylan"];
names2.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
// yes it works
// type inference
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = numbers[0]; // no error
console.log(head);
// typescript tuples
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// ourTuple = [false, "Coding God was mistaken", 5];
// Readonly Tuple
// A good practice is to make your tuple readonly.
// Tuples only have strongly defined types for the initial values:
// ourTuple.push("This item not inserted"); // this can not be inserted as it is readonly
// Named Tuples
// Named tuples allow us to provide context for our values at each index.
var graph = [55.2, 41.3];
var x = graph[0];
var y = graph[1];
console.log(x, y);
for (var _i = 0, graph_1 = graph; _i < graph_1.length; _i++) {
    var value = graph_1[_i];
    console.log(value);
}
// Destructuring Tuples
// Since tuples are arrays we can also destructure them.
