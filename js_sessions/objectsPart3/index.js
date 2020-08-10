// input: object;
// output: array of objects

// algo
// 1. get key-value by Object.entries
// 2. map this array
// 3. sort this array 

const getCustomersList = obj => Object.entries(obj)
    .map(el => ({...el[1], id: el[0]}))
    .sort((a,b) => a.age - b.age);

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    }
};

console.log(getCustomersList(customers)); 
