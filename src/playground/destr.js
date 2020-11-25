// const person = {
//  age: 30, location: {city:'tempe',temp:90}
// }


// const {name:aty='anonymous',age,location:{city:kala='almaty',temp: gradus}} =person

// if(kala && gradus) console.log(`${aty} is ${age}.${name} is from ${kala}.It's ${gradus} degrees in ${kala}`)

// const book = {title: 'harry potter',author: 'rowling',publisher: {name: 'OA'}}

// const {publisher:{name: publisherName='Self-Published'}} = book

// console.log(publisherName)


// const address = []

// const [,city='unknwon',postal='123',{street}={street: 'night club'}] =address

// console.log(`You are in ${city} ${postal}.Conor Mcgregor ${street}`)


const item = ['Cofee (hot)','$2.00','$2.50','$2.75',[10,9]]


const [cofee,,medium,,[perfect,closeToPerfect,average=4.5] ] =item

console.log(`A medium ${cofee} costs ${medium}.Her face is ${average}`)