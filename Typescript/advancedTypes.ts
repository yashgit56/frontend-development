// Mapped Type
// Basic Mapped Type
// Transform every property of an object type into a new type using a single template.

import nodeOs = require("node:os");

interface User {
  id: number;
  name: string;
  email: string;
}

type flags<T> = {
  [K in keyof T]: boolean;
};

type addProperties<T> = {
  +readonly [K in keyof T]+?: T[K];
};

type userFlags = flags<User>;

type propertiesAdd = addProperties<User>;

// type remappingKey<T> = {
//     [k in keyof T as `get${Capitalize<k>}`]: () => void;
// }

const obj2: propertiesAdd = {
  id: 5,
};
console.log("Obj2: ", obj2);

const obj: userFlags = {
  id: true,
  name: true,
  email: true,
};
console.log(obj);

function makeGetters<T extends Record<string, any>>(obj: T) {
  const out: any = {};

  for (const k of Object.keys(obj)) {
    const cap = k.charAt(0).toUpperCase() + k.slice(1);
    out["get" + cap] = () => obj[k];
  }

  return out as {
    [k in keyof T as `get${Capitalize<string & k>}`]: () => T[k];
  };
}

const u: User = { id: 7, name: "Bob", email: "bob@example.com" };
const g = makeGetters(u);
console.log(g.getId());
console.log(g.getName());
console.log(g.getEmail());

// Conditional Types
// Conditional types allow you to define types that depend on a condition.

// Conditional types (runtime illustration)
type IsString<T> = T extends string ? true : false;
type ArrayElement<T> = T extends (infer U)[] ? U : never;

const arr = [1, 2, 3];
console.log(typeof arr[0]); // 'number'

function isString(x: unknown): boolean {
  return typeof x === "string";
}
console.log(isString("hello")); // true
console.log(isString(42));      // false