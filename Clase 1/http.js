const http = require('node:http')
const { findPort } = require('./puerto-libre.js')
const server = http.createServer((req, res) => {
  console.log('request recived')
  res.end('Hola Mundo')
})

findPort(3000).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

