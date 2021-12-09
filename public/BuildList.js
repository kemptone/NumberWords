import { Build } from './Word.js'

export default (Page, Limit) => () => {

  const { buckets_arr } = Page
  const Final = [ ]
  // const primes = [ ...Page.primes ]

  // let special_words = []
  let x = 1

  while (x <= Limit) {

    let y = 26
    let index

    for (y = 26; y; y--) {
      if (x % y === 0) {
        index = y
        break
      }
    }

    // if (index)
    Final.push(
      {
        ...buckets_arr[ index ].shift() 
        , index
      }
    )
    // else
    //  Final.push({ word : "FARD" })

    x++
  }

  console.log({
    Final
  })

  /*
  while (primes.length) {
      let num = (primes.shift()) - 1
      if (!special_words.length)
        special_words = [ ...Page.special_words ]
      let word = special_words.shift()
      Page.words.splice(num, 0, { word })
  }
  */

  // Build( Page.e_words )( Page.words.slice(0, Limit) )
  Build( Page.e_words, Page.prime_keys )( Final.slice(0, Limit) )

}