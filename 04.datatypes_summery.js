// Primitive Datatype

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

// 7 types

/*
String
Number
Boolean
Null
Undefind
Symbol => it is used to make a value unique
BigInt => it is used to store a big number of value

*/

const score = 100;

const scoreValue = 100.3;

const isLoggedin = false;

const outsideTeam = null;

let userEmail;

const id = Symbol("123");

const anotherId = Symbol("123");

// console.log(id === anotherId);

const bigNumber = 26543876532907542n;

// console.log(typeof bigNumber);

// Reference (Non Primitive)

/*
Array
Objects
Functions
*/

const heros = ["salman", "sarukh", "Hritik"];

const myObj = {
  name: "Durga",
  age: 20,
};

const myFunction = function () {
//   console.log("Hello durga");
};

// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunction);







/********************************************************************************/



// Stack(Primitive)     Heap(Non Primitive)

// when ever we will store data in stack memory only we will get the copy of that.
// when ever we will store data in Heap memory  we will get the reference of that.


// Stack 


let myYoutubeName="hiteshchoudary.com"

let anotherName=myYoutubeName

anotherName="Chai or Code"

console.log(myYoutubeName)
console.log(anotherName)



//Heap

   
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


