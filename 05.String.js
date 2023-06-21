const name="Durga"

const repoCount=50

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)



const gameName=new String("Durga Mohapatra")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(6))
// console.log(gameName.indexOf('M'))



const newString=gameName.substring(0,5)
console.log(newString)

// const anotherString=gameName.slice(0,5)
const anotherString=gameName.slice(-8,-5)
// console.log(anotherString)


const newStringone="   Durga Mohapatra  "
// console.log(newStringone)
// console.log(newStringone.trim())


const url="https://hitesh.com/hitesh%20choudary"

// console.log(url.replace("%20","_"))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))