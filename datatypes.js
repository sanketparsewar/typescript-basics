"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lname = "pars";
// lname=23;
var fname;
fname = "sanket";
fname = fname.toUpperCase();
console.log(fname);
var age;
age = 23.3;
var aeg = parseInt("23");
console.log(typeof age.toString());
console.log(typeof aeg);
console.log(aeg);
console.log(typeof age);
var isvalid = false;
console.log(isvalid);
// let elist:String[];
// or
var elist;
elist = ["a", "b", "c", "d", "e", "f", "g"];
console.log(elist);
console.log(typeof elist);
// let emp = elist.find((e) => e == "st");
// console.log(emp, "is present in elist");
var combine = elist.reduce(function (acc, str) { return acc + str; }); //acc is accumulator and str is element from array
console.log(combine);
var reverse = elist.reduce(function (acc, str) { return str + acc; });
console.log(reverse);
// let nlist:Array<number>
// or
var nlist;
nlist = [2, 1, 6, 3, 4];
console.log(nlist);
console.log(typeof nlist);
// let result1 = nlist.find((e) => e > 2); //find return only single value
// find gives the first value greater than 2
var result2 = nlist.filter(function (e) { return e > 2; });
// filter gives the array of numbers greater than 2
// console.log(result1);
console.log(result2);
var sum = nlist.reduce(function (acc, num) { return acc + num; }); //acc is accumulator and num is element from array
console.log(sum);
// console.log(color)
// console.log(typeof(color))
var c = 2 /* Green */;
console.log(c);
// ----------tuple--------------
// let swapNumb:number[];
// if we specify the number of elements in an array it acts as tuple
// and for tuples we cannot access elements at index greater than length of tuple
var swapNumb;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumb = swapNumbers(1, 2);
console.log(typeof (swapNumb));
console.log(swapNumb);
// ---------any------
// declaring varibale with datatype any we can give any value of that varible string,number,boolean,array...
var mobile;
mobile = 8237834;
console.log(typeof (mobile));
mobile = 'vivo';
console.log(typeof (mobile));
mobile = true;
console.log(typeof (mobile));
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 2));
