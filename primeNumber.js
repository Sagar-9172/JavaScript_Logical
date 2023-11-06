// let arr=[10,20,11,20,31]
// let primen=[]
// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(4));

// for(let value of arr){
// if(isPrime(value)===true){
//   primen.push(value)
// }
// }
// console.log(primen)

// for(let x in arr){
//   console.log(x)
//   console.log(typeof(x))
// }

// for(let x of arr){
//   console.log(x)
//   console.log(typeof(x))
// }

// program 2
let arr = [10, 3, 50]
let prim = []

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log(isPrime(2))

for (let x of arr) {
    if (isPrime(x)===true){
        prim.push(x)
    }

}
// console.log(prim)



// ............................................................................................
// program 3
let arr3=[20,30,5,11]
let prim3=[]
function isPrimeNumber(el){
    if(el<=1){
        return false
    }
    for(i=2;i<el;i++){
        if(el%i==0){
            return false
        }
    }
    return true
}
console.log(isPrimeNumber(4))

for(let i of arr3){
    if(isPrimeNumber(i)===true){
        prim3.push(i)

    }
}
console.log(prim3)





















