// function declaration 

// declarar função sem parametro
function sayHello() {
    console.log('Hello!')
}

sayHello()

// declarar função com paramentro 
function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}

sayHelloTo('Breno')


// declarar função com return
function returnHi() {
    return 'Hi !'
}
// 2 formas de extrair o resultado do return
// 1º
console.log(returnHi())

//2º
let resultado = returnHi()
console.log(resultado)

// declarar função com parametro e com return
function returnHiTo(name){
    return `Hi ${name}`
}

console.log(returnHiTo('Breno'))