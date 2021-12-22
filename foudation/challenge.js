// CREATE A RANGE FUNCTION

// rascunho 
// const primeiro = 8
// const segundo = -3
// const terceiro = 4

// for (i = primeiro; i >= segundo; i-= terceiro){
//     console.log(i)
// }

function primeiroCaso(primeiro) {
    const vetor = []
    for (i = 1; i <= primeiro; i++){
        vetor.push(i)
    }
    return vetor
}

console.log(primeiroCaso(5))

////////////////////////////////
function segundoCaso(primeiro, segundo){
    const vetor = []
    for (i = primeiro; i <= segundo; i++){
        vetor.push(i)
    }
    return vetor
}

console.log(segundoCaso(6, 11))

////////////////////////////////////////
function terceiroCaso(primeiro, segundo, terceiro){
    const vetor = []
    for (i = primeiro; i <= segundo; i += terceiro){
        vetor.push(i)
    }
    return vetor
}

console.log(terceiroCaso(10, 19, 2))

///////////////////////////////////////
function quartoCaso(primeiro, segundo){
    const vetor = []
    for (i = primeiro; i >= segundo; i--){
        vetor.push(i)
    }
    return vetor
}

console.log(quartoCaso(6, 2))

///////////////////////////////
function quintoCaso(primeiro, segundo, terceiro){
    const vetor = []
    for (i = primeiro; i >= segundo; i-= terceiro){
        vetor.push(i)
    }
    return vetor
}
console.log(quintoCaso(8, -3, 4))


