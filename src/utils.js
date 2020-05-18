const sleep = (delay) => new Promise((returned) => setTimeout(returned, delay))

module.exports = {
  sleep
}