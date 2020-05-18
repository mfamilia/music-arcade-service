const createRouter = require('find-my-way')
const fs = require('fs')
const querystring = require('querystring')
const TokenManager = require('./token-manager')
const config = require('./config')

const router = createRouter({ 
  ignoreTrailingSlash: true,
  defaultRoute: (req, res) => {
    res.statusCode = 404
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ data: 'not found' }))
  }
})

router.on('GET', '/spotify', (req, res) => {
  const scope = 'user-read-private user-read-email'
  const query = querystring.stringify({
    response_type: 'code',
    client_id: config.clientId,
    scope: scope,
    redirect_uri: config.redirectUri
  })
  
  const Location =`https://accounts.spotify.com/authorize?${query}` 

  res.writeHead(302, { Location })
  res.end()
})

router.on('GET', '/spotify/callback', async (req, res) => {
  const url = new URL(req.url, `${config.PROTOCAL}://${req.headers.host}`)
  const code = url.searchParams.get('code')
  
  await TokenManager.fetchRefreshToken(code)

  res.end()
})

module.exports = router