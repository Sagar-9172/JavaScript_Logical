// function bubblesort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j + 1] > arr[j]) {
//                 const temp = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubblesort([1,2,11,22,3,6,4,3,5,6,7]));
// console.log(this)

// function test() {
//     // console.log('test', this)

//     const parentArrow = () => {
//         const childArrow = () => {
//             console.log(this)
//         }
//         childArrow()

//     }
//     parentArrow()
// }
// test()


const obj = {
    data: ['a', 'b'],
    parentArrow: () => {
        console.log(this)
    }

}
obj.parentArrow()
