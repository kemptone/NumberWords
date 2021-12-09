import { Build } from './Word.js'
import Sort from './Sort.js'
import BuildList from './BuildList.js'

const Limit = 10000

const Page = window.Page = {
  words : []
  , special_words : []
  , words_loaded : false
  , e_words : document.querySelector("#words")
  , Limit
  , primes : undefined
}

const buildList = BuildList(Page, Limit)

const worker = new Worker("prime.worker.js")

worker.onmessage = function (message) {
  console.log({ data : message.data })
  Page.primes = message.data
  if (Page.words_loaded)
    buildList()
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

      Page.words.push({
        word
        , count
      })

    })

    Object.assign(Page, Sort(Page.words))

    Page.words_loaded = true
    return Page
} )
.then( arr => {
  // Build( Page.e_words )( Page.words.slice(0, Limit) )
  if (Page.primes)
    buildList()
} )