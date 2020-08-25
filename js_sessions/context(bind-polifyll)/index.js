// 'use strict'
function printMessage(age, city) {
  console.log(this);
  console.log(`Hello ${this.name}, email ${this.email}, age: ${age}, city: ${city}`);
}

let user = {
  name: "Alex",
  email: "gmail.com",
}

// bind algs
//input: obj, aarg1,..., argN
//output: function

// const pmBinded = printMessage.bind(user);
// pmBinded(100, 'Lviv')


// bind algs
//input: func, obj, aarg1,..., argN
//output: function
// const myBind = (func, context, ...args) => {
//   console.log('Step1')
//   return function() {
//     console.log('Step1')
//     return func.call(context, ...args)
//   }
// }
// const myBind = myBind(printMessage, user, 200, 'Kiyv');

// const myBind1 = (func, context, ...args) => {
//   console.log('Step1')
//   return function(...targetArgs) {
//     console.log('Step1')
//     return func.call(context, ...args, ...targetArgs)
//   }
// }

// const printMyBind1 = myBind1(printMessage, user);
// printMyBind1(200, 'Kiyv');
// const printMyBind2 = myBind1(printMessage, user, 200);
// printMyBind2( 'Kiyv')

const myBindSuperBind = (func, context, ...args) => {
  console.log("step1")
  return function () {
    console.log("step2");

    const copyContext = {...context}
    copyContext.tempFunction = func;
    copyContext.tempFunction(...args);
  }

}

const printMyBind4 = myBindSuperBind(printMessage, user, 200, 'Dnipro');
// console.log(printMyBind4)
printMyBind4();

console.log(user)
