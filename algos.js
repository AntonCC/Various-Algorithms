exports.bubbleSort = function(arr) {
    let size = arr.length
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size-1; j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}

exports.improvedBubbleSort = function(arr) {
    let size = arr.length
    let swapped
    do {
        swapped = false
        for(let i = 0; i < size; i++) {
            if(arr[i] > arr[i+1]) {
                let tmp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = tmp
                swapped = true
            }
        }
    } while(swapped)
    return arr
}

exports.insertionSort = function(arr)
{
    let size = arr.length
    for(let i = 1; i < size; i++) {
        let j = i-1
        let tmp = arr[i]
        while(j >= 0 && arr[j] > tmp) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = tmp
    }
    return arr
}

exports.binarySearch = function(arr, key) {
    let min = 0,
        max = arr.length - 1,
        guess
    
    while(min <= max) {
        guess = Math.floor(min + ((max - min) / 2))
        if(arr[guess] === key) {
            return key + " found at: " + guess
        } 
        else if(arr[guess] < key) {
            min = guess + 1
        }
        else {
            max = guess - 1
        }
    }
    return -1
}