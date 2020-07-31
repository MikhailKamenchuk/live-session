'use strict'

const isPrime = num => {
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const getPrimes = num => {
    for(let i = 0; i <= num; i++){
      if (isPrime(i) && i > 1){
        console.log(i)
      } 
    }
}
