const Spotify = require('spotify-web-api-node')
const fs = require('fs').promises
const config = require('./config')

const credentials = {
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  redirectUri: config.redirectUri
}

const readRefreshToken = async () => 
  fs.readFile(config.refreshTokenFile)

const readAccessToken = async () => 
  fs.readFile(config.access_token)

const fetchRefreshToken = async (code) => {
   
  const spotify = new Spotify(credentials);

  const data = await spotify.authorizationCodeGrant(code)
  
  await fs.writeFile(config.refreshTokenFile, data.body['refresh_token'])
  await fs.writeFile(config.accessTokenFile, data.body['access_token'])
}

module.exports = {
  fetchRefreshToken
}