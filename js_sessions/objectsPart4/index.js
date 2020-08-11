// input: array of objects, array;
// output: array of objects

// algo
// 1. map array of objects 

// solution
// const markAdmins = (usersArr, adminsArr) => {
//     return usersArr.map(user => {
//         console.log('Element is', user);

//         const isAdmin = adminIds.includes(el.id);
//         console.log(isAdmin);
//         return {...user, isAdmin}
//     })
// }  


//refactoring

const markAdmins = (usersArr, adminsArr) =>  usersArr.map(user => ({...user, isAdmin: adminsArr.includes(user.id)}))

const adminIds = ['1', '3'];
const users = [
    { id: '1',  name: 'Bob' },
    { id: '2', name: 'Tom' },
    { id: '3', name: 'Sam' },
    { id: '4', name: 'Tad' }
];
const adminUsers = markAdmins(users, adminIds);
console.log(adminUsers)
// result
// [
//    { id: '1', isAdmin: true, name: 'Bob' },
//    { id: '2', isAdmin: false, name: 'Tom' },
//    { id: '3', isAdmin: true, name: 'Sam' },
//    { id: '4', isAdmin: false, name: 'Tad' }
// ];
