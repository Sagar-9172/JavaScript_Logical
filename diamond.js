function diamondPattern1(num) {
    for (let i = 1; i <= num; i++) {
        let pyramids = '';
        for (let j = 1; j <= num - i; j++) {
            pyramids += ' '
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            pyramids += '*'
        }
        console.log(pyramids);
    }
    for (let i = num; i >= 1; i--) {
        let pyramids = '';
        for (let j = 1; j <= num - i; j++) {
            pyramids += ' '
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            pyramids += '*'
        }
        console.log(pyramids)
    }
}
diamondPattern1(5)

