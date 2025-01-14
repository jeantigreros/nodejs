const path = require('node:path')

// con path.sep obtenemos la barra separadora de arhvios en el SO

console.log(path.sep)

// unir rutas con path.join

const filePath = path.join('home','j','dev','nodejs-course')
console.log(filePath)
// -> home/j/dev/nodejs-course

// obtener extensión de un archivo

const extname = path.extname('image.jpg')
console.log(extname)
