// casting with as directly change the type of given variable

let x: unknown = "hello";
console.log((x as string).length);

let x2: unknown = 4;
console.log(x2 as string); // prints undefined since numbers don't have a length

let x3: number = 6;
console.log((x3 as unknown as string).length);

// <> casting example
console.log((<string>x).length);
console.log(<number>x2);

// this is example of force casting 
console.log((<string>(<unknown>x3)).length);
