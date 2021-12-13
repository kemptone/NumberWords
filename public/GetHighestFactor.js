export default ({ primes, prime_keys }) => number => {

  let cursor = Math.floor( number / 2 )

  while (cursor) {
    cursor = cursor - 1
    if (prime_keys[ cursor ])
      break
  }

  const loopWithThese = primes.slice(0,  primes.indexOf( cursor ))

  let factor = 0
  let index = loopWithThese.length - 1

  while (index) {

    if ( number % loopWithThese[ index ] === 0 )
      break

      index = index - 1
  }

  return loopWithThese[ index ]

}