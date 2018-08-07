function quickSort(arr, x) {
    if (arr.length <= 1) return arr
    const sort = (arr, start, end) => {
        if (start >= end) return arr
        let i = start,
            j = end,
            center = arr[start];
        while (i <= j) {
            while (arr[i] < center) {
                i++
            }
            while (center < arr[j]) {
                j--
            }
            if (i <= j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
                j--
            };
        };
        i < x ? sort(arr, i, end) : sort(arr, start, i - 1)
        

        return arr[x-1]
    }
    return sort(arr, 0, arr.length - 1)
}

console.log(quickSort([5, 2, 9, 7, 6, 8, 2, 4, 3, 5, 1],11))