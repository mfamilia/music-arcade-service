const gpiop = require('rpi-gpio').promise
const buttons = require('./buttons').lightable
const { sleep } = require('./utils')

const init = async () => {
  const promises = []

  buttons.forEach(({ pin }) => {
    promises.push(
      gpiop.setup(pin, gpiop.DIR_OUT)
    )
  })

  return Promise.all(promises)
}

const flash = async (buttons, interval) => {
  for await (let b of buttons) {
    const { pin } = b

    await gpiop.write(pin, true)
    await sleep(interval)

    await gpiop.write(pin, false)
    await sleep(interval)
  }
}

const clockwiseLoop = async (buttons, promise, interval = 1000) => {
  let continueCycling = true

  promise.then(() => continueCycling = false)

  while (continueCycling) {
    for await (let b of buttons) {
      await flash([b], interval)
    }
  }
}

const constantFlash = async (buttons, promise, interval = 1000) => {
  let continueCycling = true

  promise.then(() => continueCycling = false)

  while (continueCycling) {
    await flash(buttons, interval)
  }
}


module.exports = {
  init,
  constantFlash,
  clockwiseLoop
}