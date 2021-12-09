const BuildWord = fragment => (item, index) => {

  if (!item)
    return

  const e_div = document.createElement("div")
  const e_num = document.createElement("i")
  const e_word = document.createElement("b")
  e_word.innerHTML = item.word
  e_num.innerHTML = (index + 1) + "."
  e_div.appendChild(e_num)
  e_div.appendChild(e_word)
  fragment.appendChild(e_div)
}

export const Build = Parent => words => {
  const fragment = new DocumentFragment()
  words.forEach( BuildWord( fragment ) )
  Parent.appendChild( fragment )
}