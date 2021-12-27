function somar (a) {
    return function (b){
        return a + b                    
    }
}

function subtrair (a) {
    return function (b){
        return a - b                    
    }
}

function multiplicar (a) {
    return function (b){
        return a * b                    
    }
}

const resultadoSomar = somar(7)
const resultadoSubtrair = subtrair(7)
const resultadoMultiplicar = multiplicar(7)

console.log(resultadoSomar(3))
console.log(resultadoSubtrair(3))
console.log(resultadoMultiplicar(3))
