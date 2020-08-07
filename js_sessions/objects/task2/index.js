// input: array, array
// output: object

// algo:
// 1. iterate keysList with reduce


const buildObject = (keysList, valuesList) => keysList.reduce((acc,next,index) => Object.assign(acc, {[next]: valuesList[index]}), {});

