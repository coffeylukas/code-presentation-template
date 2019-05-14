// // const, let, and var
// const name = 'Lukas'
// let name = 'lukas'
// var name = 'what?'







// // Arrow Functions
const button = document.getElementById('button')
function test(params) {
    button.addEventListener('click', function(e) {
        console.log(this)
    })
}
test()

// // Examples
// const sayHello = () => {
//     return 'Hello'
// }
// const sayWord = word => {
//     return word
// }
// const sayWords = (word, words) => {
//     return word + words
// }





// let name = 'Lukas',
//     city = 'Blacksburg'

// const string1 = 'My name is ' + name + ' and I\'m from ' + city
// const string2 = `My name is ${name} and I\'m from ${city}`









// const me = {
//     name: 'Lukas',
//     age: 20,
//     job: 'Dev',
//     city: 'Blacksburg'
// }
// const { name, age, job } = me
// const getHello = ({ name, age, job }) => {
//     return `My name is ${name}, I am a ${job}, and I am ${age}.`
// }

// const nums = [1, 2, 3, 4, 5]
// const [num1, num2] = nums


// const [n1, n2, ...theRest] = nums

// const { name, city, ...everythingElse } = me









// const fruits = ['banana', 'apple', 'fruit gummies']
// const moreFruits = ['oranges', ...fruits]
// // ['oranges', 'banana', 'apple', 'fruit gummies']

// const person = { 
//     name: 'Lukas', 
//     age: 20,
//     job: {
//         name: 'Dev',
//         pay: 100
//     }
// }
// const employee = {
//     ...person,
//     job: {
//         ...person.job,
//         name: 'Dev'
//     }
// }

// function addValues(one, two, ...values) {
//     let sum = 0
//     values.forEach(value => sum += value)
//     return sum
// }

function multiplyBy({ factor, ...numbers }) {
    console.log(factor, numbers)
}

multiplyBy({ factor: 2, numbers: [2, 2, 4, 6, 8], equals: true, selected: false })




// const array = [1,2,3,4,5]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }




// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//         this.sayName = this.sayName.bind(this)
//     }
//     _doSomething() {

//     }
//     getName() {
//         return this.name
//     }
//     sayName() {
//         const name = this.getName()
//         console.log(name)
//     }
// }

// const me = new Person('Lukas', 20)
// const you = new Person('Ransom', 25)





// class Employee extends Person {
//     constructor({ name, age, job }) {
//         super(name, age)
//         this.job = job
//         this.show = this.show.bind(this)
//     }
// }

// const lukas = new Employee({
//     name: 'Lukas',
//     age: 20,
//     job: 'Dev'
// })

// me.sayName()
// console.log(me)
// const callThis = me.sayName
// callThis()

