const net = require('node:net')

function findPort (Port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(Port, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUNSE') {
        findPort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findPort }
