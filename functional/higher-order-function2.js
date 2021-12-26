// tecnica de curring
function finalPrice(tax, price){
    return function(price){
        return `O valor final é: ${price * (1 + tax)}`
    }
}
// imaginando que o produto tem 8,75% de imposto

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))