// input: array, array
// output: object

// algo:
// 1. iterate keysList with reduce
// 1. iterate keysList with reduce

const buildObject = (keysList, valuesList) => {
    return keysList.reduce((acc,next,index) => {
        const newElem = {[next]: valuesList[index]}
        console.log(newElem)
        return  Object.assign(acc, newElem);
    }, {})
};
