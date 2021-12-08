import { Build } from './Word.js'

const Limit = 10000

const Page = window.Page = {
  words : []
  , special_words : []
  , words_loaded : false
  , e_words : document.querySelector("#words")
  , Limit
  , primes : undefined
}

const worker = new Worker("prime.worker.js")

worker.onmessage = function (message) {
  console.log({ data : message.data })
  Page.primes = message.data
  if (Page.words_loaded)
    buildList()
}

const buildList = () => {
    const primes = [ ...Page.primes ]
    let special_words = []

    while (primes.length) {
        let num = (primes.shift()) - 1
        if (!special_words.length)
          special_words = [ ...Page.special_words ]
        let word = special_words.shift()
        Page.words.splice(num, 0, { word })
    }

  Build( Page.e_words )( Page.words.slice(0, Limit) )
}

worker.postMessage(Limit)

fetch("special_words.txt")
.then( response => response.text() )
.then( text => {
    text.split("\n").forEach(
      line => Page.special_words.push( line )
    )
})

fetch("english_words_short.txt")
.then( response => response.text() )
.then( text => {
    text.split("\n").forEach(
      line => {

      const [ word, count ] = line.split(" ")

      Page.words.push(
        {
          word
          , count
        }
      )
      }
    )
    Page.words_loaded = true
    return Page
} )
.then( arr => {
  // Build( Page.e_words )( Page.words.slice(0, Limit) )
  if (Page.primes)
    buildList()
} )