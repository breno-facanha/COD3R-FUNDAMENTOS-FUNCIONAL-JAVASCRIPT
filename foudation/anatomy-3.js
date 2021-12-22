// FUCTION EXPRESSION
const increment1 = function(n) {
    return n + 1
}

// ARRROW FUNCTION É SEMPRE UMA FUNÇÃO ANONIMA
const increment2 = (n) => {
    return n + 1 
}

// como existe somente um paramentro pode tirar os parenteses
const increment3 = n => {
    return n + 1 
}

// nesse caso tirando as chaves o return ja é implicito 
// ou seja só precisa colocar o return quando tem chaves
const increment4 = n => n + 1 


console.log(increment1(1))
console.log(increment2(7))
console.log(increment2(22))
console.log(increment2(25))

const sum = (a, b) => a + b
console.log(sum(3 ,5))