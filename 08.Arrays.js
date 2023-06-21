// Arrays

// Arrays is nothing but storing collection of multiple items under a single variable

const myArr=[0,1,2,3,4,5]

// const myHeros=["Saktiman","Nagaraj"]

// const myArr2=new Array(1,2,3,4,5)

// console.log(myArr[1])

myArr.push(6)
// console.log(myArr)                 // it will add the value at the end of array

myArr.pop()
// console.log(myArr)                // it will remove the value from the end of array

myArr.unshift(9)
// console.log(myArr)                // it will add the value at the beginning of array


myArr.shift()
// console.log(myArr)                  // it will remove the value from the beginning of array


myArr.includes(9)
// console.log(myArr)                  // this method will check value is avalable or not if avalable return true else false

myArr.indexOf(3)
// console.log(myArr)


const newarr=myArr.join()
// console.log(newarr)
// console.log(typeof newarr)



// slice splice

console.log("A ",myArr)

const myn1=myArr.slice(1,3)

console.log(myn1)

console.log("B",myArr)

const myn2=myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2);

