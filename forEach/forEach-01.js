const people = ['lucas', 'maria', 'joana', 'ana'];

const person = [
    { name : 'John',  age: 40, gender: 'male' },
    { name : 'Ana',   age: 19, gender: 'female' },
    { name : 'Bia',   age: 22, gender: 'female' },
    { name : 'Alex',  age: 25, gender: 'male' }
]
// ex 01
// const callback = (person) => {
//   return console.log(person.name, person.age, person.gender)
// }
// person.forEach(callback)

// ex 02
// function callback(value, i, array){
//     return console.log('indice: ' + i, value)
// }
// people.forEach(callback)

// ex 03
// function callback(value, index, array){
//     console.log('index: ' + index)
//     console.log('value: ' + value)
//     console.log('-----------------------')
// }
// people.forEach(callback)

// ex 04
// people.forEach( (value, index, array) => {
//     console.log('index: ', index)
//     console.log('value: ', value)
//     console.log('-----------------------')
// })

// ex 05
// people.forEach((value, index) =>{
//     return console.log(index, value)
// })

// ex 05
// people.forEach((value, index) =>{
//     console.log('index: ', index)
//     console.log('value: ', value)
//     console.log('-----------------------')
// })