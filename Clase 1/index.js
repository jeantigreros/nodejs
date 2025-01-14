const os = require('node:os');

console.log('Información del sistema operativo:')
console.log('----------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.uptime() / 60 / 60)
console.log(os.userInfo())
console.log(os.totalmem() / 1024 / 1024)

