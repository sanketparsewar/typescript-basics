// ex:-

// interface Address{
//     street:string
//     city:string
//     state:string
//     pin:string
// }

// class Student {
//   id: number;
//   name: String;
//   address: Address;
//   constructor(id: number, name: string, address: Address) {
//     this.id = id;
//     this.name = name;
//     this.address = address;
//   }
// }

// let Jack = new Student(12, "jack", {street:'Baner',city:"pune",state:"MH",pin:"411041"});
// console.log(Jack);

//-----------------------------------------------

export interface User {
  name: string;
  age: number;
  id: number;
  email: string;
}

let user: User = { name: "sanket", age: 22, id: 2, email: "sanket@gmail.com" };
console.log(user);

// extending the user interface
interface Employees extends User {
  salary: number;
}
let employee: Employees = {
  name: "sanket",
  age: 22,
  id: 2,
  email: "sanket@gmail.com",
  salary: 45454,
};
console.log(employee);

// method definition
// we have to use this object outside of this file so use export keyord
export interface Login {
  login(): User;
}

// ----------------------------------------------------------
// object destructuring and array destructuring
// using this we can directly access the name as username and email as userLogin
// instead of writing user1.name or user1.email
let { name: username, email: userLogin }: User = {
  name: "Jack",
  age: 23,
  id: 42,
  email: "jack@gmail.com",
};
console.log(username);
console.log(userLogin);

let [user1,user2,...restUser]: User[] = [
  { name: "Anna", age: 33, id: 2, email: "anna@gmail.com" },
  { name: "Bela", age: 53, id: 3, email: "bela@gmail.com" },
  { name: "pk", age: 42, id: 4, email: "pk@gmail.com" },
  { name: "ak", age: 72, id: 5, email: "ak@gmail.com" },
  { name: "srk", age: 50, id: 6, email: "srk@gmail.com" }
];
console.log(user2)
console.log(restUser)
console.log(user1)

let result=restUser.filter(user=>user.id>2)
console.log(result)





