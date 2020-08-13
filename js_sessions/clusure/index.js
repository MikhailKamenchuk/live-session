function makeCounter() {
    let count = 0;
	return function() {
        return ++count;
    };
}

function makeCounterNew() {
    let count = 0;
    ++count;
    return count
}
const counter = makeCounter();
console.log(counter);
console.log(counter);
console.log(counter);
console.log(counter);
console.log(counter);

const counter1 = makeCounterNew();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

//createMessenger lex env
// {
//     enviromentRecord: {
//         message: '...',
//         sender: '...,
//         sendMessage: func1,
//         setMessage: func2,
//         setSender: func2,
//     },
//     outer: globalLexEnv
// }