const api = require('../api')
const http = require('http')
const config = require('../config/config')

const port = config.server.port
const server = http.createServer(api)

server.listen(port, (err) => {
  if (err) {
    console.error(`[-] Could not start the server => ${err}`)
  } else {
    console.log(`[+] Server started in port ${port}`)
  }
})
