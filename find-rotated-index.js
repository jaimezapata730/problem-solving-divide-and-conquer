const findRotatedIndex = ( arr, num ) => {
    let pinNum = findPinNum( arr )
    if ( pinNum > 0 && num >= arr[0] && num <= arr[ pinNum - 1]) {
        return binarySearch( arr, num, 0, pinNum - 1 );
    } else {
        return binarySearch( arr, num, pinNum, arr.length - 1 )
    }
}

const binarySearch = ( arr, num, first, last ) => {
    if( arr.length === 0) return -1;
    if ( num < arr[first] || num > arr[last] ) return -1;

    while ( first <= last ) {
        let mid = Math.floor(( first + last ) / 2 )
        if ( arr[mid] === num ) {
            return mid;
        } else if ( num < arr[mid] ) {
            last = mid - 1;
        } else {
           first = mid + 1; 
        }
    }
    return -1;
}

const findPinNum = ( arr ) => {
    if ( arr.length === 1 || arr[0] < arr[arr.length -1]) return 0;
    let first = 0
    let last = arr.length - 1;
    while ( first <= last ) {
        let mid = Math.floor(( first + last ) /2 );
        if (arr[mid] > arr[mid + 1]) return mid + 1
        else if (arr[first] <= arr[mid]) {
            first = mid + 1
        } else {
            last = mid - 1
        }
    }
}

module.exports = findRotatedIndex