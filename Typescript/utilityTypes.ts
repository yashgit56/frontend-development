// Partial changes all properties in object to be optional

interface Point {
  x: number;
  y?: number;
}

// let pointPart: Partial<Point> = {};

// pointPart.x = 20;
// console.log(pointPart);

// Required chagne all properties in an object to be required

let myPoint: Required<Point> = {
  x: 20,
  y: 30,
};

console.log("My Point, X and Y both required", myPoint);

const monthNumberMap: Record<string, number> = {
  January: 1,
};

console.log(monthNumberMap);

// Omit removes key from object type

interface Person {
  name: string;
  age: number;
  location?: string;
}

const person: Omit<Person, "age" | "location"> = {
  name: "Yash",
};

console.log(person);

// Pick removes all , but the specified will be kept 

const person2: Pick<Person, "name"> = {
  name: "Aryan",
};

console.log(person2);

// Exclude
// Exclude removes types from a union.


