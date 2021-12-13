import GetHighestFactor from "./GetHighestFactor.js"

const BuildWord = ({ fragment, prime_keys, getHighestFactor }) => (item, number) => {

  if (!item)
    return

  number = number + 1

  const e_div = document.createElement("div")
  const e_num = document.createElement("i")
  const e_word = document.createElement("b")
  const e_em = document.createElement("em")
  e_word.innerHTML = item.word

  if (prime_keys[ number ])
    e_em.innerHTML = "prime"
  else if (item.index === 1 && number > 1) {
    let num = getHighestFactor(number)
    e_em.innerHTML = `${ num } x ${ number / num }`
  } else
    e_em.innerHTML = `${ item.index } x ${ number / item.index }`

  e_num.innerHTML = number + "."
  e_div.appendChild(e_num)
  e_div.appendChild(e_word)
  e_div.appendChild(e_em)
  fragment.appendChild(e_div)
}

export const Build = Page => words => {
  const { e_words, prime_keys, primes } = Page
  const getHighestFactor = GetHighestFactor(Page)
  const fragment = new DocumentFragment()
  words.forEach( BuildWord({ ...Page, fragment, getHighestFactor }) )
  e_words.appendChild( fragment )
}