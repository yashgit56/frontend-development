"use strict";
// Mapped Type
// Basic Mapped Type
// Transform every property of an object type into a new type using a single template.
Object.defineProperty(exports, "__esModule", { value: true });
// type remappingKey<T> = {
//     [k in keyof T as `get${Capitalize<k>}`]: () => void;
// }
var obj2 = {
    id: 5,
};
console.log("Obj2: ", obj2);
var obj = {
    id: true,
    name: true,
    email: true,
};
console.log(obj);
function makeGetters(obj) {
    var out = {};
    var _loop_1 = function (k) {
        var cap = k.charAt(0).toUpperCase() + k.slice(1);
        out["get" + cap] = function () { return obj[k]; };
    };
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var k = _a[_i];
        _loop_1(k);
    }
    return out;
}
var u = { id: 7, name: "Bob", email: "bob@example.com" };
var g = makeGetters(u);
console.log(g.getId());
console.log(g.getName());
console.log(g.getEmail());
