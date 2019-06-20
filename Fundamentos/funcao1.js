function imprimirSoma(a, b) {
    console.log(a + b)
    console.log(a - b)
}

imprimirSoma(2, 3)


// Vc consegue definir um valor padrao caso esqueca de passar nao da erro

function soma (a, b = 0){ //Valor de B caso nao seja informaod e 0

    return a + b

} 

console.log (soma(2, 3))
console.log (soma(2))
