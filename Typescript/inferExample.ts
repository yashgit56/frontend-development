// 1. Question

import console = require("node:console");

// type Slice<
// T extends any[],
// Start extends number,
// End extends number
// > = /* ??? */

// type R1 = Slice<[1, 2, 3, 4, 5], 1, 4>;  // [2, 3, 4]
// type R2 = Slice<[string, boolean, number], 0, 2>; // [string, boolean]
// type R3 = Slice<[1, 2], 0, 5>; // [1, 2] (end can be past length)

// type BuildTuple<L extends number, T extends any[] = []> = T["length"] extends L
//   ? T
//   : BuildTuple<L, [...T, any]>;

// type Subtract<A extends number, B extends number> = BuildTuple<A> extends [
//   ...BuildTuple<B>,
//   ...infer R
// ]
//   ? R["length"]
//   : never;

// type Drop<
//   T extends any[],
//   N extends number,
//   Count extends any[] = []
// > = Count["length"] extends N
//   ? T
//   : T extends [infer F, ...infer R]
//   ? Drop<R, N, [...Count, F]>
//   : [];

// type Take<
//   T extends any[],
//   N extends number,
//   Result extends any[] = []
// > = Result["length"] extends N
//   ? Result
//   : T extends [infer F, ...infer R]
//   ? Take<R, N, [...Result, F]>
//   : Result;

// type Slice<T extends any[], Start extends number, End extends number> = Take<
//   Drop<T, Start>,
//   Subtract<End, Start>
// >;

// type R1 = Slice<[1, 2, 3, 4, 5], 1, 4>; // [2, 3, 4]
// type R2 = Slice<[string, boolean, number], 0, 2>; // [string, boolean]
// type R3 = Slice<[1, 2], 0, 5>; // [1, 2]
// type R4 = Slice<[1, 2], 2, 2>; // []
// type R5 = Slice<[1, 2], 3, 5>; // []

// type A = [1, 2, 3];
// type B = ["a", "b", "c"];

// type Zip<T1,T2> = T1 extends [infer F1, ...infer R1] ?
//     T2 extends [infer F2, ...infer R2] ? [[F1, F2], ...Zip<R1,R2>]
//         : []
//         :[] ;

// type Z = Zip<A, B>;

// Flattens the array
// type A = [1, [2, 3], [[4]], 5];

// type Flatten<T> = T extends [infer F, ...infer R]
//   ? F extends any[]
//     ? [...Flatten<F>, ...Flatten<R>]
//     : [F, ...Flatten<R>]
//   : [];

// type F = Flatten<A>;

// check unique element in array

type Includes<T extends any[], U extends any> = T extends [infer F, ...infer R]
  ? F extends U
    ? true
    : Includes<R, U>
  : false;

type Unique<T extends any[], Z extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? Includes<Z, F> extends true
    ? Unique<R, Z>
    : Unique<R, [...Z, F]>
  : Z;

type R1 = Unique<[1, 2, 2, 3, 1]>; // ?
type R2 = Unique<["a", "b", "a", "c", "b"]>; // ?
type R3 = Unique<[]>; // ?
