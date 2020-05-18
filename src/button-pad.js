const Gamepad = require("gamepad");
var Buttons = require("./buttons")

const events = {
  Down: "down",
  Up: "up"
}

const init = () => {
  Gamepad.init()

  setInterval(Gamepad.processEvents, 16)
  setInterval(Gamepad.detectDevices, 500)
}

const on = (event, func) => {
  Gamepad.on(event, (_id, code) => {
    func(event, Buttons.fromCode(code))
  })
}

module.exports = {
  init,
  on,
  events
}