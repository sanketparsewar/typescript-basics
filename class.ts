import { Login, User } from "./interface";

// classes can be use to handle the businesss logics
// In angular the classes are used for writing services like getting data from the backend and displaying on the frontend
// used for componenet to keep the data from html

// class Employee{
//     id!:number
//     name!:String
//     address!:String
// }
// let sanket=new Employee()
// sanket.id=2;
// sanket.name='Sanket'
// sanket.address='pune'
// console.log(sanket)

// ---------------------------
// declaring the parameterised constructor
// class Employee {
//   id!: number;
//   name!: String;
//   address!: String;
//   constructor(id: number, name: string, address: string) {
//     this.id = id;
//     this.name = name;
//     this.address = address;
//   }
// }

// let sanket = new Employee(1, "sanket", "india");
// console.log(sanket);

// ----------------------------
// class Employee {
//   id!: number;
//   name!: String;
//   address!: String;
//   constructor(id: number, name: string, address: string) {
//     this.id = id;
//     this.name = name;
//     this.address = address;
//   }
//   getNameWithAddress(): string {
//     return this.name + " " + this.address;
//   }
// }

// let sanket = new Employee(1, "sanket", "india");
// console.log(sanket);
// let address = sanket.getNameWithAddress();
// console.log(address);

// --------------------------------
// using setter and getter
// class Employee {
//   private id: number; //writing # means making variable private

//   protected name: String; //only accessed in the extendedclass and not in any other class
//   address: String;
//   constructor(id: number, name: string, address: string) {
//     this.id = id;
//     this.name = name;
//     this.address = address;
//   }
//   static getEmployeeCount(): number {
//     return 20;
//   }
//   getNameWithAddress(): string {
//     return this.name + " " + this.address;
//   }

//   //this is getter to get the value
//   get empid(): number {
//     return this.id;
//   }
//   //   this is setter to set the value of the variables
//   set empid(id: number) {
//     this.id = id;
//   }
// }

// let sanket = new Employee(1, "sanket", "india");
// console.log(sanket);
// sanket.empid = 121;
// console.log(sanket.empid);
// console.log(sanket.getNameWithAddress()); //accessed through object
// console.log(Employee.getEmployeeCount()); //only accessed using the class name

// -------------------------------------------------------
// importing the Login interface from the interface.ts file

class Employee implements Login {
  id: number;
  name: String;
  address: String;
  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
  login(): User {
    return {name:'sanket',age:22,id:2,email:'sanket@gmail.com'}
  }
  
}

let sanket = new Employee(1, "sanket", "india");

console.log(sanket);
console.log(sanket.login());
