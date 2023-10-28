const sortedFrequency = ( arr, num ) => {
    let firstIdx = findFirst( arr, num );
    if (firstIdx == -1) return firstIdx;
    let secondIdx = findSecond( arr, num );
    return secondIdx - firstIdx + 1;
}

const findFirst = ( arr, num, low = 0, high = arr.length - 1 ) => {
    if ( high >= low ) {
        let mid = Math.floor( ( low + high ) / 2 )
        if (( mid === 0 || num > arr[ mid -1 ]) && arr [ mid ] === num ) {
            return mid;
        } else if ( num > arr[mid]) {
            return findFirst( arr, num , mid + 1, high)
        } else {
            return findFirst( arr, num, low, mid - 1)
        }
    }
    return -1
}

const findSecond = ( arr, num, low = 0, high = arr.length - 1 ) => {
    if ( high >= low) {
        let mid = Math.floor(( low + high ) / 2 )
        if (( mid === arr.length - 1 || num < arr[ mid + 1 ]) && arr [ mid ] === num) {
            return mid;
        } else if ( num < arr[ mid ]) {
            return findSecond( arr, num, low, mid - 1 )
        } else {
            return findSecond( arr, num, mid +1, high)
        }
    }
    return -1
}


module.exports = sortedFrequency