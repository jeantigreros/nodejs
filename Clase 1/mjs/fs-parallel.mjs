import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('../notes.md', 'utf-8'),
  readFile('../texto.md', 'utf-8')
]).then(([text, secondText]) => {
console.log(text),
console.log(secondText)
})
