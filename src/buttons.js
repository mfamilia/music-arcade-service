const red = { code: 8, name: 'red', pin: 37, playlist: 'json-classical', contextUri: 'spotify:playlist:5mYzVylCdZeyR23XccmAqc' }
const blue = { code: 9, name: 'blue', pin: 35, playlist: 'json-kids', contextUri: 'spotify:playlist:0mGWeb9ak4wdYMySSBI3wW' }
const green = { code: 10, name: 'green', pin: 31, playlist: 'json-spanish', contextUri: 'spotify:playlist:7yn5RpHqewAxLZlmIM9K9z' }
const yellow = { code: 7, name: 'yellow', pin: 33, playlist: 'json-big-band', contextUri: 'spotify:playlist:6ZMJ49EhgyHc3NugRttU5h' }
const white = { code: 11, name: 'white' }

const lookupMap = {
  [red.code]: red,
  [blue.code]: blue,
  [green.code]: green,
  [yellow.code]: yellow,
  [white.code]: white
}

const all = [
  yellow,
  red,
  blue,
  green,
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