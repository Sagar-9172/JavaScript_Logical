
// program 1
// let mix="AbphBHFJGGggk"
// let capital=''
// let small=''
// let regx=/[A-Z]/


// for(let i=0;i<mix.length;i++){
//     if(regx.test(mix[i])){
//         capital=capital+mix[i]
//     }
//     else{
//         small=small+mix[i]
//     }
// }
// console.log(capital)
// console.log(small)


// program 2
let Ab = "AJBBNBnsdkjcAAA"
let c = ''
let s = ''
let regx2 = /[A-Z]/
for (let i of Ab) {
    if (regx2.test(i)) {
        c += i
    }
    else {
        s += i
    }
}
console.log(c)







































