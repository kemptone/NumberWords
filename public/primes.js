export default (limit = 10000) => {

  let cursor = 12

  const arr = [ 2, 3, 5, 7, 11 ]

  // while (arr.length < limit) {
  while (cursor < limit) {

    let truthy = true

    for (let x = 0; x < arr.length; x++) {
      if ( cursor % arr[x] === 0) {
        truthy = false
        break
      }
    }

    if (truthy)
      arr.push( cursor )

    cursor = cursor + 1

  }

  return arr

}











































































