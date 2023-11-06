let mm=['sachin','sagar','sachin','shubham']
let nn=[]
// for(let i of mm){
//     if(!nn.includes(i)){
       
//     nn.push(i)
// }
// }
// console.log(nn)

// ..................................................................
// Programe 2
// using  set method
function duplicateValueremove(mm){
    return [...new Set(mm)]
}
// console.log(duplicateValueremove(mm))


// ......................................................
// Program 3
// Using filter 
let arr = ["apple", "mango", "apple", 
          "orange", "mango", "mango"]; 
  
function removeDuplicates(arr) { 
    return arr.filter((item, 
        index) => arr.indexOf(item) === index); 
} 
// console.log(removeDuplicates(arr));

// ............................................................
// Program  4
//  using filter
let arr1 = ["apple", "mango", "apple", 
          "orange", "mango", "mango"]; 
  
function removeDuplicates(arr1) { 
    return arr1.filter((item, 
        index) => arr1.indexOf(item) === index); 
   
} 
// console.log(removeDuplicates(arr1));
console.log(arr1.indexOf("apple"));









