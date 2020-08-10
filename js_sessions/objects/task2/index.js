// input: array, array
// output: object

// algo:
// 1. iterate keysList with reduce

<<<<<<< HEAD
// function buildObject(keysList, valuesList) {
//     return keysList.reduce((acc, key, index) => {
//         return { ...acc, [key]: valuesList[index] };
//     }, {});
// }

const buildObject = (keysList, valuesList) => keysList.reduce((acc,next,index) => Object.assign(acc, {[next]: valuesList[index]}), {});

let k = ['1', '2', '3'];
let v = ['a', 'b', 'c'];
console.log(buildObject(k,v))
=======

const buildObject = (keysList, valuesList) => keysList.reduce((acc,next,index) => Object.assign(acc, {[next]: valuesList[index]}), {});

>>>>>>> 15bb6c241b6d0266eac29b78b6a9e64d6f027488
