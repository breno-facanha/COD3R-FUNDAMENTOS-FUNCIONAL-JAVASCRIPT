const numbers = [1, 2, 3, 4, 5, 6]

const numberV2 = numbers.map( elemento => elemento * 2)

console.log(numbers ,numberV2)

const students = [ 
    { name: 'Breno', score: 6.2},
    { name: 'Samara',score: 8.3},
    { name: 'Samyle',score: 5.3},
    { name: 'Marele',score: 4.5},
    { name: 'Assur', score: 6.4}
]

const getScore = elemento => elemento.score
console.log(
    students
      .map(getScore)
      .map(Math.ceil)
)

console.log(students)