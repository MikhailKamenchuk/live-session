const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    intervalId: null,

    // startTimer: function(){

    // },

    startTimer() {
        //fix context with bind

        // const adder = function(){
        //     console.log(this);
        //     this.secondsPassed++
        // };
        // console.log(this);
        // const bindedAdder = adder.bind(this);
        // setInterval(bindedAdder, 1000);


        //fix context with arrow func

        this.intervalId = setInterval(() => {
            console.log(this);

            this.secondsPassed += 1;

            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 1000);
    },
    stopTimer() {
        console.log('stopTimer is called');
        console.log(this);
        clearInterval(this.intervalId);
    },
    getTime() {

    },
    reset() {
        
    }
};

timer.secondsPassed = 55
timer.startTimer();

// lose context example 

// const user = {
//     name: 'Test',
//     run() {
//         console.log(this)
//     }
// }
// user.run()

// function printer(func){
//     console.log('I am running');
//     func();
// }
// const func = user.run;
// printer(func);