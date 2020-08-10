// input: object, object;
// output: boolean

// algo
// 2. iterate obj1 keys
// 3. compare values 

// PROTOTYPE

// const compareObjects = (obj1, obj2) => {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     let flag = true;

//     // console.log(keys1);
//     // console.log(keys2);

//     // console.log('TEST 1');

//     if(keys1.length !== keys2.length){
//         flag = false
//     };

//     // console.log('TEST 2');

//     keys1.forEach((key, index) => {
//         // console.log(obj1[key]);
//         // console.log(obj2[key]);
//         if(obj1[key] !== obj2[key]){
//             flag = false
//         }
//     })

//     return flag
//     // console.log(Object.keys(obj1).sort().toString())
// }

const compareObjects = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
         return false
    };

    return !keys1.some(key => obj1[key] !== obj2[key]);
}

// const compareObjects = (obj1, obj2) => {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
//     return keys1.reduce((acc, key) => {
//         console.log(obj1[key] === obj2[key]);
//         obj1[key] === obj2[key]
//     }, false);
// }

const obj1 = {
    name: 'Tom',
    age: 17
};
const obj2 = {
    name: 'Bob',
    age: 17
};
const obj3 = {
    name: 'Bob',
    age: 17,
    student: false
};
const obj4 = {
    name: 'Tom',
    age: 17,
};
console.log(compareObjects(obj1, obj2)); // false
console.log(compareObjects(obj2, obj3)); // false
console.log(compareObjects(obj1, obj4)); // true
