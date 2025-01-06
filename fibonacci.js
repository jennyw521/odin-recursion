function fibs(num) {
    let result = [];

    if (num <= 0) return result;

    for (let i = 0; i < num ;i++) {
        if (i == 0 || i == 1) {
            result[i] = i;
        } else {
            result[i] = result[i - 1] + result[i - 2];
        }
    }
    return result;
}

function fibsRec(num) {
    if (num <= 0) {
        return [];
    } else if (num == 2) {
        return [0, 1];
    } else if (num == 1) {
        return [0];
    }

    prevArr = fibsRec(num - 1);
    newNum = prevArr[num - 2] + prevArr[num - 3];
    return prevArr.concat(newNum);
} 

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(0)); // []

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(0)); // []