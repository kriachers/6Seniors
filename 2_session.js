
// Копирование объектов 

let obj1 = {
    apple: 1,
    orange: 5,
    abobus: {
        abobusApple: 1,
        abobusorange: 5,
    }
}

let objCopy = Object.assign({}, obj1)

objCopy.apple = 99

console.log('Оригинл')
console.log(obj1)
console.log('Копия')
console.log(objCopy)

objCopy.abobus.abobusApple = 99

console.log('Оригинл')

console.log(obj1)
console.log('Копия')
console.log(objCopy)

let deepCopy = JSON.parse(JSON.stringify(obj1))

console.log('Глубокая копия')

deepCopy.abobus.abobusorange = 99
console.log(deepCopy)
console.log(obj1)

// ЗАДАЧИ

// =======
// 4.1
// =======

// task 1
const user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

// task 2

function isEmpty (obj) {
    if (Object.keys(obj).length === 0){
        console.log(true)
    } else console.log(false) 
}

// Вопросы: почему Object.keys(obj), а не obj.keys()
// почему не length()

// task 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sumSalary = 0;

  for (let person in salaries) {
        sumSalary = sumSalary + salaries[person]
  }

  salaries.sumSalary = sumSalary




