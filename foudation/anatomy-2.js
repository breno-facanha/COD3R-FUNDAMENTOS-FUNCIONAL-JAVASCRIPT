// ANONYMOUS FUNCTION

(function (a, b) {
    return a + b
})

// FUCTION EXPRESSION

const sum = function (a, b) {
    return a + b
}
console.log(sum(12, 58))
// ou
const result = sum(12, 58)
console.log(result)

const anotherSum = sum
console.log(anotherSum(3, 5))
