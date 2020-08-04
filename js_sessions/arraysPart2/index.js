// algo 
// create empty array
// iterate array & call callback

// input: [10, 20, 30, 1, 8]
// output: [30]

function filterArray (arr, callback) {
    const result = [];
    
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) result.push(arr[i])
    }
    
    return result
}

let array = [10, 30, 1, 8, 122];
const callback = element => element > 20;

console.log(filterArray (array, callback))

