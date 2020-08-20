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

const pmBinded = printMessage.bind(user);
pmBinded(100, 'Lviv')


// bind algs
//input: func, obj, aarg1,..., argN
//output: function
const myBind = (func, context, ...args) => {

  // TODO
}

// myBind(printMessage, user, 200, 'Kiyv'))();