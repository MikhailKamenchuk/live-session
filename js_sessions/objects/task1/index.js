// input: object, string
// output: object

const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData
};
const addPropertyV2 = (userData, userId) => {
    // input object, obbject, ... N
    // outbut: object

    Object.assign(userData, { id:userId });
    return userData
};
const addPropertyV3 = (userData, userId) => {
    return Object.assign({}, userData, { id:userId });
};
const addPropertyV4 = (userData, userId) => {
    return {
        ...userData,
        id: userId
    }
};
const user = {
    name: 'Sam'
}

console.log(addPropertyV1(user, '1111111')); // { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '2222222')); // { name: 'Sam', id: '1234567' }
console.log(addPropertyV3(user, '3333333')); // { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(user, '4444444')); // { name: 'Sam', id: '1234567' }
