// algo 
// 
// 

// input:
// output:

class Sportsman {
    constructor(name){
        console.log(this);
        console.log('CONSTRUCTOR sportsman', name)
        this.name = name
    }
    run() {
        console.log(`${this.name} is running`)
    }
}

class Swimmer extends Sportsman{
    constructor(name, style){
        super(name);
        console.log(this);
        console.log('CONSTRUCTOR swimmer', name)
        // this.name = name,
        this.style = style
    }
    swim() {
        console.log(`${this.name} is swimming ${this.style}`)
    }
    test(){
        console.log(this)
    }
}

// testing:

// const newSportsman = new Sportsman('John');
// newSportsman.run()
// const newSportsman2 = new Sportsman('Sam');
// newSportsman2.run()
// const newSportsman3 = new Sportsman('Rob');
// newSportsman3.run()



const newSwimmer = new Swimmer('John','croll');
console.log(newSwimmer)
newSwimmer.swim()
newSwimmer.test()



// classes for js Obj

// obj1 = {
//     name: 'John',
//     run(){
//         console.log(`${this.name} is running`)
//     }
// }