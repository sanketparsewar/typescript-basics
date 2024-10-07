// generic type to write function with name
function add(a:number,b:number){
    return a+b;
}
console.log(add(2,3))

// arrow function
const sub=(n1:number,n2:number)=>{return n1-n2}; 
console.log(sub(2,1))

// using function expression
const mul=function(p:number,q:number){return p*q}
console.log(mul(2,4))

// optional parameter function
function sum(a:number,b:number,c?:number){
    return c? a+b+c : a+b ;
}
console.log(sum(2,4))
console.log(sum(2,4,5))

// default parameter / required parameter
function addition(a:number,b:number,c=10){
    return a+b+c
}
console.log(addition(1,2))
console.log(addition(1,2,3))

// rest parameter means multiple value can be passed
function add2(n1:number,n2:number,...n3:number[]){
    return n1+n2+n3.reduce((acc,sum)=>acc+sum)
}
console.log(add2(1,2,3,4,5))


// generic function
function getItem<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items);
}
let concatResult=getItem<number>([1,2,3,4,5])
console.log(concatResult)
let Result=getItem<String>(['a','b','c','d'])
console.log(Result)



