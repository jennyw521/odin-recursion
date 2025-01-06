function merge(arr1, arr2) {
    let newArr = [];
    const totalLength = arr1.length + arr2.length;

    for (let i = 0, j = 0, k = 0; k < totalLength; k++) {
        if (arr1[i] < arr2[j] || j == arr2.length) {
            newArr[k] = arr1[i];
            i++;
        } else {
            newArr[k] = arr2[j];
            j++;
        } 
    }

    return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}


console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); //[0, 1, 1, 2, 3, 5, 8, 13] 
console.log(mergeSort([105, 79, 100, 110])); //[ 79, 100, 105, 110 ] 
console.log(mergeSort([3])); //[3]
console.log(mergeSort([])); //[]
