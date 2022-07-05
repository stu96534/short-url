function getNumber(numLength) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const number = '1234567890'

  let collect = []
  let Random = ''

  collect = collect.concat(lowerCaseLetters.split('')).concat(upperCaseLetters.split('')).concat(number.split(''))

  for (i = 0; i < numLength; i++) {
    let number = Math.floor(Math.random() * collect.length)
    Random += collect[number]
  }


  return Random
}

module.exports = getNumber