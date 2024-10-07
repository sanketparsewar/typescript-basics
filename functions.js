"use strict";
// generic type to write function with name
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
// arrow function
var sub = function (n1, n2) { return n1 - n2; };
console.log(sub(2, 1));
// using function expression
var mul = function (p, q) { return p * q; };
console.log(mul(2, 4));
// optional parameter function
function sum(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(sum(2, 4));
console.log(sum(2, 4, 5));
// default parameter / required parameter
function addition(a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
}
console.log(addition(1, 2));
console.log(addition(1, 2, 3));
// rest parameter means multiple value can be passed
function add2(n1, n2) {
    var n3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        n3[_i - 2] = arguments[_i];
    }
    return n1 + n2 + n3.reduce(function (acc, sum) { return acc + sum; });
}
console.log(add2(1, 2, 3, 4, 5));
// generic function
function getItem(items) {
    return new Array().concat(items);
}
var concatResult = getItem([1, 2, 3, 4, 5]);
console.log(concatResult);
var Result = getItem(['a', 'b', 'c', 'd']);
console.log(Result);
