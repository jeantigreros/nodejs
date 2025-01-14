// Filesystem

const fs = require('node:fs') 

const stats = fs.statSync('./whynode.md')

console.log(
stats.isFile(),
stats.isDirectory(),
stats.isSymbolicLink(),
stats.size
)

// Esta es la forma Sincrona de leer archivos
const text = fs.readFileSync('./whynode.md', 'utf-8')

console.log(text)

// Esta es la forma Asincrona de leer archivos
fs.readFile('./texto.md', 'utf-8', (err, text2) => {
console.log(text2)
})



