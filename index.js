//exo 1//

let fruits = ['Apple','Orange','Banana']

fruits = [...fruits, 'Raspberry']
console.log(fruits);

//exo 2//

let fruit = ['Apple','Orange','Banana']

fruit = ['Raspberry', ...fruit]
console.log(fruit);

//exo 3//

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

arr3 = [...arr1, ...arr2,]
console.log(arr3)

//exo4//

const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
  }

  const bobby =  {
	...user,
	firstName: "Bobby"
}

console.log(bobby)

//exo5//

const numbers = [1, 2, 3, 4, 5, 6]
// const eachNumbers = (number) => {
// 	console.log(number)
// }
 const eachNumbers = numbers.forEach( e =>{
    console.log(e)
})

