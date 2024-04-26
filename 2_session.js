
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

// task 4

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(menu) {
    for (const key in menu) {
        if (typeof(menu[key]) == "number") {
          menu[key] = menu[key] * 2;
        }
      }
  }

  multiplyNumeric(menu)

// ======
// 4.3
// ======

let calculator = {
  sum () {
    return this.a + this.b
  },
  mul () {
    return this.a * this.b
  },
  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// ======
// Конструктор, оператор "new"
// ======

function Calculator () {

  // ВОПРОС: я правильно понимаю, что read мы используем,
  // когда хотим запросить значение через промпт
  // а так можно в теле функции через переменные записать?

  this.read = function() {
    this.a = Number(prompt('a'));
    this.b = Number(prompt('b'));
  }

  this.sum = function() {
    return this.a + this.b
  }
  this.mul = function() {
    return this.a * this.b
  }
}

let my_calculator = new Calculator();
my_calculator.read();

alert( "Сумма равна" + my_calculator.sum() );
alert( "Умножение равно" + my_calculator.mul() );


//Создайте функцию-конструктор Accumulator(startingValue).

function Accumulator(startingValue) {
  this.value = Number(startingValue)

  this.read = function() {
    this.userValue = Number(prompt('userValue', 0))
    this.value = this.value + this.userValue
  }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);




