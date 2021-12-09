const BuildWord = (fragment, prime_keys) => (item, number) => {

  if (!item)
    return

  const e_div = document.createElement("div")
  const e_num = document.createElement("i")
  const e_word = document.createElement("b")
  const e_em = document.createElement("em")
  e_word.innerHTML = item.word

  if (prime_keys[ number + 1 ])
    e_em.innerHTML = "prime"
  else
    e_em.innerHTML = `${ item.index } x ${ (number + 1) / item.index }`

  e_num.innerHTML = (number + 1)
  e_div.appendChild(e_num)
  e_div.appendChild(e_word)
  e_div.appendChild(e_em)
  fragment.appendChild(e_div)
}

export const Build = (Parent, prime_keys) => words => {
  const fragment = new DocumentFragment()
  words.forEach( BuildWord( fragment, prime_keys ) )
  Parent.appendChild( fragment )
}