run();
// go();
const name = 'Test';
function run() {
    console.log('run');
}
const go = () => {
    console.log('go');
}
{
    console.log('Naming');
    const city = 'Dnipro';
}
console.log(adress);
for (let i = 0; i < 5; i++) {
    const adress = '';
    console.log(i);
}
function createMessenger() {
    let message = 'Just learn it';
    let sender = 'Gromcode';
    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`);
    }
    function setSender(newSender) {
        console.log(name);
        sender = newSender;
    }
    function setMessage(text) {
        message = text;
    }
    return {
        sendMessage,
        setMessage,
        setSender,
    };
}
const messanger1 = createMessenger();
messanger1.setSender('SOME SENDER');
messanger1.sendMessage('HELLO');
const messanger2 = createMessenger();
messanger2.sendMessage('HELLO');
//GLOBAL lex env
// const globalLexEnv = {
//     enviromentRecord: {
//         run: funcRun,
//         createMessenger: funcCreateMessenger
//         name: 'Test',
//         go: goFunc 
//     },
//     outer: null
// }
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