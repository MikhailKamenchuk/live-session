//hoisting example 1
// console.log(message);
// var message = 'Hoisting is here!';


//hoisting example 2
// var a = 55;
// console.log(a);

// if (a) {
//     var a = 1;

//     console.log(a);
// }

// console.log(a);


// hoisting example 3
// var a = 77;
// console.log(a);

// function print() {
//     var a = 2;
//     console.log(a);
// }
// print();

// console.log(a);

let a = 5;

for (let i = 0; i < 5; i++) {
    console.log(i);
    a++;
    console.log(a) 
    var b = 10
    b++  
}
console.log('b: '+ b)