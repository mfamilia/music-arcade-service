const Spotify = require('spotify-web-api-node')
const fs = require('fs').promises
const config = require('./config')

const credentials = {
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  redirectUri: config.redirectUri
}

const spotifyCredentials = async () => {
  const [refreshToken , accessToken] = await Promise.all([readRefreshToken(), readAccessToken()])

  return {
    ...credentials,
    accessToken,
    refreshToken
  }
}

const readRefreshToken = async () => 
  fs.readFile(config.refreshTokenFile)
    .then((data) => data, (err) => undefined)

const readAccessToken = async () => 
  fs.readFile(config.accessTokenFile)
    .then((data) => data, (err) => undefined)

const writeAccessToken = async (data) => {
  const token = data.body['access_token']

  return fs.writeFile(config.accessTokenFile, token)
}
  
const writeRefreshToken = async (data) => {
  const token = data.body['refresh_token']
  
  return fs.writeFile(config.refreshTokenFile, token)
}

const fetchRefreshToken = async (code) => {
   
  const spotify = new Spotify(credentials);

  const data = await spotify.authorizationCodeGrant(code)
  
  await writeRefreshToken(data)
  await writeAccessToken(data)

  init()
}

const refreshAccessToken = async () => {
  const credentials = await spotifyCredentials()
  const spotify = new Spotify(credentials)
  const data = await spotify.refreshAccessToken()

  await writeAccessToken(data)
}

let initialized = false

const init = async () => {
  if (initialized) {
    return;
  }

  initialized = true

  const token = await readRefreshToken()
  
  if (token) {
    await refreshAccessToken()

    setInterval(refreshAccessToken, 3500 * 1000)
  }
}

module.exports = {
  fetchRefreshToken,
  init,
  spotifyCredentials,
  readRefreshToken
}