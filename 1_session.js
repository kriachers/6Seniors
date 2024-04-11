// Variables 
let admin;
let name;
name = "John";
admin = name;

alert((admin))

// Types

let name_1 = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // ? hello name

alert( `hello ${name_1}` ); // ? hello Ilya

// Operators

let a = 1, b = 1;

let c = ++a; // 2 2 
let d = b++; // 1 2

"" + 1 + 0 // "10"
"" - 1 + 0 // "-1"
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 //NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2

// if else

let answer = prompt("Какое «официальное» название JavaScript?", "")

if (answer == "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!")
}

let num_answer = prompt("Введите число", 0)

if (num_answer > 0) {
    alert(1);
} else if (num_answer == 0) {
    alert(0)
} else alert(-1)


let result;

result = (a + b < 4) ? 'Мало' : 'Много'

age = 5

if (age >= 14 && age <= 90) {
    console.log('da')
}

// ========
// while-for
// ========


// При помощи цикла for выведите чётные числа от 2 до 10.
for (i = 2; i <= 8; i+=2) {
    console.log(i)
}


// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
//for (let i = 0; i < 3; i++) {
   // alert( `number ${i}!` );
//}

let i = 0;

while (i < 3) {
    alert( `number ${i}!` );
    i++
}

//Напишите цикл, который предлагает prompt ввести число, большее 100. 
// Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

let num;

do {
  num = prompt("Введите число", 0);
} while (num <= 100 && num);


// ========
// Functions
// ========


//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function selectMin(a, b) {
    return b > a ? a : b
}

// Напишите функцию pow(x,n),
// которая возводит x в степень n и возвращает результат.

function pow(x, n) {
    return x**n
}


// ========
// Arrow Functions
// ========

const ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );

  // ========
// Arrow Functions
// ========