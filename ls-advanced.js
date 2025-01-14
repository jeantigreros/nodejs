const fs = require('node:fs/promises')
const path = require('node:path')
const pico = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pico.red(`No se ha podido leer el directorio ${folder}`))
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(pico.red(`No se ha podido leer el directorio ${folder}`))
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'dir' : 'file'
    const fileSize = stats.size.toString()
    const fileModified = stats.atime.toLocaleString()

    return `${fileType} ${pico.blue(file.padEnd(20))} ${pico.green(fileSize.padStart(10))} ${fileModified}`

  })

  const filesInfo = await Promise.all(filesPromises)
  filesInfo.forEach(fileInfo => console.log(fileInfo))
}
ls(folder)
