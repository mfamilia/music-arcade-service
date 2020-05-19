const server = require('./src/server')
const Lighting = require('./src/lighting')
const Buttons = require('./src/buttons')
const ButtonPad = require('./src/button-pad')
const TokenManager = require('./src/token-manager')
const Spotify = require('spotify-web-api-node')
const config = require('./src/config')

const port = process.env.PORT || 3000


server.listen(port, async () => {
  ButtonPad.init()

  let stopLight
  let lightPromise = new Promise((resolve) => stopLight = resolve)

  await Lighting.init()

  Lighting.clockwiseLoop(Buttons.lightable, lightPromise)

  await TokenManager.init()
  const token = await TokenManager.readRefreshToken()

  if (!token) {
    return
  }
    
  const credentials = await TokenManager.spotifyCredentials()

  ButtonPad.on(ButtonPad.events.Down, (state, button) => {
    stopLight()

    lightPromise = new Promise((resolve) => stopLight = resolve)

    Lighting.constantFlash([button], lightPromise)

    const s = new Spotify(credentials)

    s.play({ device_id: config.deviceId, context_uri: button.contextUri })
  })
})