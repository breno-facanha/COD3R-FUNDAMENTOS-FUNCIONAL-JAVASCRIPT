const somar = a => b => a + b

const subtrair = a => b => a - b                    

const multiplicar = a => b => a * b                    

const resultadoSomar = somar(7)
const resultadoSubtrair = subtrair(7)
const resultadoMultiplicar = multiplicar(7)

console.log(resultadoSomar(3))
console.log(resultadoSubtrair(3))
console.log(resultadoMultiplicar(3))
