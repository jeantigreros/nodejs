const fs = require('node:fs/promises')

fs.readFile('./texto.md', 'utf-8')
  .then(text => {
    console.log(text)
  })

fs.readFile('./whynode.md', 'utf-8')
  .then(text => {
    console.log(text)
  })
