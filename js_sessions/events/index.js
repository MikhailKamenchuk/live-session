// input: domString - string that contain css selector
// outnput: element in HTML

const btns = document.querySelectorAll('.btn');

// BAD!!!!
// btns[0].addEventListener('click', handleclick)
// btns[0].addEventListener('click', handleclick)

// console.log([...btns])

const handleclick = e => console.log(e.target.textContent);

btns.forEach(btn => btn.addEventListener('click', handleclick));

// btns.forEach(btn => {
//     const obj = {
//         name: 'Some user'
//     }

//     addEventListener('click', handleclick.bind(obj))
// });

// function handleclick(event){
//     console.log(this);
//     console.log(`Hello, ${this.name}`);
//     console.log(event);
// }