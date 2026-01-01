// Try playing around with modifying properties and adding ones to see what happens
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

console.log(car);

// type inference 
const car2 = {
  type: "Toyota",
};

car2.type = "Ford"; // no error

// car2.type = 2; // Error: Type 'number' is not assignable to type 'string'.

console.log(car2);

// optional properties 

const car3: { type: string; mileage?: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car3.mileage = 2000;
console.log(car3);

// index signatures 

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
// Index signatures like this one can also be expressed with utility types like Record<string, number>.