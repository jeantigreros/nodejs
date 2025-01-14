// el process te da información del proceso actual, es un objeto global. - ver métodos

console.log(process.argv)

// controlar el proceso y su salida

// process.exit(1) // Error
// process.exit(0) // Todo funcionó sin problemas

// Podemos controlar eventos del proceso

process.on('exit', () => {
  // limpiar recursos

})

// current working directory

console.log(process.cwd)

