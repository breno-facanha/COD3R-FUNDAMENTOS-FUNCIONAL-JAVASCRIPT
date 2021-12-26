const numbers = [1, 2, 3, 4, 5, 6]

const maiorQueZero = numbers.filter( elemento => elemento > 0 )
const maiorQueZero2 = elemento => elemento > 0
const even = elemento => elemento % 2 === 0

console.log(maiorQueZero)
console.log(numbers.filter(maiorQueZero2))
console.log(numbers.filter( elemento => elemento > 2))
console.log(`Os numeros pares: ${numbers.filter(even )}`)


const students = [ 
    { name: 'Breno', score: 6.2},
    { name: 'Samara',score: 8.3},
    { name: 'Samyle',score: 5.3},
    { name: 'Marlene',score: 4.5},
    { name: 'Assur', score: 6.4}
]

const melhoresAlunos = aluno => aluno.score >= 6

console.log(students.filter(melhoresAlunos))


