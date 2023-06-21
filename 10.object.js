// Objects

// when ever we will create a object by using constructor that's creates singleton objects

// Object literals


const mySym= Symbol('key1')


const jsUser={
    name:"Hitesh",
    age:20,
    'full name':"Hitesh Choudary",
    [mySym]:'mykey1',
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedin:false,
    lastLoginDays:["Monday","saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser['full name'])
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);


jsUser.email="hitesh@chatgpt.com"

Object.freeze(jsUser)

jsUser.email="Hitesh@microsoft.com"

console.log(jsUser)

