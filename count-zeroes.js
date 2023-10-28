const countZeroes = ( arr ) => {
    let firstZero = firstOne( arr )
    if ( firstZero === -1)
    return 0;
    return arr.length - firstZero
  }
  
  const firstOne = ( arr, lower = 0, higher = arr.length - 1 ) => {
    if ( higher >= lower) {
      let middle = Math.floor( ( higher + lower ) / 2 )
      if (( middle === 0 || arr[ middle -1 ] === 1) && arr[middle] === 0 ) {
        return middle;
      } else if ( arr[middle] === 1) {
        return firstOne( arr, middle + 1, higher)
      }
      return firstOne( arr, lower, middle - 1)
    }
    return -1;
  }

module.exports = countZeroes