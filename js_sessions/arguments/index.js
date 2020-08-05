// input: number, number ... N;
// output: number

// algo: 
// 1. gether all arguments;
// 2. multiply


const multiply = (...args) => args.reduce((acc, next) => next * acc) 

console.log(multiply(1,2,3,4,5))