'use strict'
/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */
// ... code here
function getSenseOfLife() {
    return 42
}

console.log(getSenseOfLife())

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */
// ... code here

function getSquared(num){
    return num*num
}
console.log(getSquared(5))


/* ф-ция sum должна принимать два числа и вернуть их сумму */
// ... code here
function sum(num1, num2){
    return num1 + num2
}
console.log(sum(5, 2))


/*
 * ф-ция sum должна принимать число
 * ф-ция sum должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */
// ... code here

function print(num){
    return console.log(`I am ${num} years old`)
}
print(65)

/* ======> Arrow functions <======= */

/* ф-ция mult должна принимать два числа и вернуть их произведение */
// ... code here

const mult = (num1, num2) =>  num1 * num2;
console.log(mult(2, 6))

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */
// ... code here

const square = num => num * num;
console.log(square(5))
/*
 * ф-ция getMagicNumber не должна принимать аргументы
 * ф-ция getMagicNumber должна вернуть число 17
 */
// ... code here
const getMagicNumber = () => 17;
console.log(getMagicNumber())