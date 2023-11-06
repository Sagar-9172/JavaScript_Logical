let arr3=[1,2,3,4,5];
let thirdHighest=0
let seconHighest=0
let highest=0
for(let i=0;i<arr3.length;i++){

    if(highest<arr3[i]){
        thirdHighest=seconHighest
        seconHighest=highest
        highest=arr3[i]
    }

}

console.log(seconHighest)