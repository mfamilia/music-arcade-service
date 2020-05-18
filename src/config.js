const spotifyScope = [
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state', 
  'streaming',
  'playlist-read-private',
  'playlist-read-collaborative'
].join(' ')


module.exports = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  protocal: process.env.PROTOCAL,
  refreshTokenFile: process.env.REFRESH_TOKEN_FILE,
  accessTokenFile: '/tmp/spotify-access-token',
  spotifyScope,
  deviceId: process.env.DEVICE_ID
}