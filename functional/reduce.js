const numbers = [1, 2, 3, 4, 5, 6]

const total = numbers.reduce( (total, elemento) => total + elemento)
console.log(total)
//ou
const soma = (total, elemento) => total + elemento
const total2 = numbers.reduce(soma)
console.log(total2)

const media = (total, elemento) => (total + elemento)
const total3 = numbers.reduce(media)
console.log(total3)
