function armStrong(num){

if(typeof num !== 'number')return 'Enter valid number'
 let str = num.toString();
 let count=str.length;
 let sum=0
 for (const value of str){
    sum+=parseInt(value) **count
 }
 return sum===num;
}
// console.log(armStrong(153))


for(let i=1;i<10000;i++){
   if(armStrong(i)){
      console.log(i)
   }
}


