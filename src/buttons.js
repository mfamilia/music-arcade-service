const red = { code: 0, name: 'red', pin: 37 }
const blue = { code: 1, name: 'blue', pin: 33 }
const green = { code: 2, name: 'green', pin: 35 }
const yellow = { code: 3, name: 'yellow', pin: 31 }
const white = { code: 4, name: 'white' }

const lookupMap = {
  [red.code]: red,
  [blue.code]: blue,
  [green.code]: green,
  [yellow.code]: yellow,
  [white.code]: white
}

const all = [
  red,
  blue,
  green,
  yellow,
  white
]

const lightable = all.filter(({ pin }) => pin)

const fromCode = (code) => lookupMap[code]

module.exports = {
  red,
  blue,
  green,
  yellow,
  white,
  fromCode,
  all,
  lightable
}