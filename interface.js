"use strict";
// ex:-
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "sanket", age: 22, id: 2, email: "sanket@gmail.com" };
console.log(user);
var employee = {
    name: "sanket",
    age: 22,
    id: 2,
    email: "sanket@gmail.com",
    salary: 45454,
};
console.log(employee);
// ----------------------------------------------------------
// object destructuring and array destructuring
// using this we can directly access the name as username and email as userLogin
// instead of writing user1.name or user1.email
var _a = {
    name: "Jack",
    age: 23,
    id: 42,
    email: "jack@gmail.com",
}, username = _a.name, userLogin = _a.email;
console.log(username);
console.log(userLogin);
var _b = [
    { name: "Anna", age: 33, id: 2, email: "anna@gmail.com" },
    { name: "Bela", age: 53, id: 3, email: "bela@gmail.com" },
    { name: "pk", age: 42, id: 4, email: "pk@gmail.com" },
    { name: "ak", age: 72, id: 5, email: "ak@gmail.com" },
    { name: "srk", age: 50, id: 6, email: "srk@gmail.com" }
], user1 = _b[0], user2 = _b[1], restUser = _b.slice(2);
console.log(user2);
console.log(restUser);
console.log(user1);
var result = restUser.filter(function (user) { return user.id > 2; });
console.log(result);
