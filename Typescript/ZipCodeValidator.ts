///<reference path="./validation.ts" />
// namespace Validation {
//   let numberRegexp = /^[0-9]+$/;

//   export class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string) {
//       return s.length === 5 && numberRegexp.test(s);
//     }
//   }
// }

// type Color = "red" | "green" | "blue";
// type Size = "small" | "medium" | "large";

// type style = `${Color}-${Size}`;

type ExtractRouteParams<T> = T extends `${string}:${infer Param}/${infer Rest}`
  ? { [K in Param | keyof ExtractRouteParams<Rest>]: string }
  : T extends `${string}:${infer Param}`
  ? { [K in Param]: string }
  : {};

type Params = ExtractRouteParams<"/users/:userId/posts/:postId">;
