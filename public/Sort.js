export default ( Words = [], { special_words } ) => {

  const Letters = " abcdefghijklmnopqrstuvwxyz".split("") // space is important for 0

  const buckets_arr = [] // 0 - 26, an array of future words sorted by first letter
  const buckets = {} // a-z by letter, linked to array

  Letters.forEach( (letter, index) => {
    const bucket = buckets[ letter ] = []
    buckets_arr.push( bucket )
  })
    
  Words.forEach( w => {
    const letter = w.word.substr(0,1)
    buckets[ letter ].push(w)
  })

  special_words.forEach( word => buckets.x.push({ word }))
  special_words.forEach( word => buckets.x.push({ word }))
  special_words.forEach( word => buckets.x.push({ word }))
  special_words.forEach( word => buckets.x.push({ word }))
  special_words.forEach( word => buckets.q.push({ word }))
  special_words.forEach( word => buckets.q.push({ word }))
  special_words.forEach( word => buckets.q.push({ word }))
  special_words.forEach( word => buckets.q.push({ word }))

  return {
    buckets_arr
    , buckets
  }

}