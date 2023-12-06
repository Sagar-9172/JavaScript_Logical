function addSpace(str) {
    let result = str[0];
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += ' ';
        }
        result += str[i];
    }

    return result;
}

console.log(addSpace('SagarShivajiNanavare'));