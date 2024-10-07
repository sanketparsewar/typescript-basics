import { BooleanLiteral } from "typescript";

let lname = "pars";
// lname=23;
let fname: String;
fname = "sanket";
fname = fname.toUpperCase();
console.log(fname);

let age: number;
age = 23.3;
let aeg = parseInt("23");
console.log(typeof age.toString());
console.log(typeof aeg);
console.log(aeg);
console.log(typeof age);

let isvalid: boolean = false;
console.log(isvalid);

// let elist:String[];
// or
let elist: Array<string>;
elist = ["a", "b", "c", "d", "e", "f", "g"];
console.log(elist);
console.log(typeof elist);
// let emp = elist.find((e) => e == "st");
// console.log(emp, "is present in elist");
let combine = elist.reduce((acc, str) => acc + str); //acc is accumulator and str is element from array
console.log(combine);
let reverse = elist.reduce((acc, str) => str + acc);
console.log(reverse);

// let nlist:Array<number>
// or
let nlist: number[];
nlist = [2, 1, 6, 3, 4];
console.log(nlist);
console.log(typeof nlist);

// let result1 = nlist.find((e) => e > 2); //find return only single value
// find gives the first value greater than 2
let result2 = nlist.filter((e) => e > 2);
// filter gives the array of numbers greater than 2
// console.log(result1);
console.log(result2);

let sum = nlist.reduce((acc, num) => acc + num); //acc is accumulator and num is element from array
console.log(sum);

// --------------enum----------
//when we write this it creates 6 lines of code but in production time we dont want to display, such that no changes can be made  so we declare as const enum

// enum color {
    //   Red,
    //   Blue,
    //   Green,
    // }
    
    // console.log(color)
    // console.log(typeof(color))
    // let c:color=color.Green
    // console.log(c)
    
// so we decalre as const enum

const enum color {
  Red,
  Blue,
  Green,
}
// console.log(color)
// console.log(typeof(color))
let c:color=color.Green
console.log(c)

// ----------tuple--------------
// let swapNumb:number[];
// if we specify the number of elements in an array it acts as tuple
// and for tuples we cannot access elements at index greater than length of tuple
let swapNumb:[number,number];
function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1]
}
swapNumb=swapNumbers(1,2);
console.log(typeof(swapNumb))
console.log(swapNumb)


// ---------any------
// declaring varibale with datatype any we can give any value of that varible string,number,boolean,array...

let mobile:any;
mobile=8237834
console.log(typeof(mobile))
mobile='vivo'
console.log(typeof(mobile))
mobile=true
console.log(typeof(mobile))


function add(num1:any,num2:any){
    return num1+num2
}
console.log(add(2,2))






