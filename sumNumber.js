function sumNumber(num) {
    // first conver the number into string bocz interating the process using loop and split is return array
    let arr = num.toString().split()
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i])
    }
    return sum
}
console.log(sumNumber(101))