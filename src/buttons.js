const red = { code: 0, name: 'red' }
const blue = { code: 1, name: 'blue' }
const green = { code: 2, name: 'green' }
const yellow = { code: 3, name: 'yellow' }
const white = { code: 4, name: 'white' }

const lookupMap = {
  [red.code]: red,
  [blue.code]: blue,
  [green.code]: green,
  [yellow.code]: yellow,
  [white.code]: white
}

const fromCode = (code) => lookupMap[code]

module.exports = {
  red,
  blue,
  green,
  yellow,
  white,
  fromCode
}