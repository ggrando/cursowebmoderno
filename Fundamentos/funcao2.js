//Armazenando funcao em variavel

const imprimirSoma = function (a, b){ //Funcao anonima Sem nome

    console.log(a + b)
}

imprimirSoma (2,3)

const soma =  (a, b) => { // => (ARROW) e uma versao resumida de function

return a + b

}

console.log(soma(2, 3))

const subtracao = (a, b) => a - b //Essa e a forma de arrow function mais oculta ainda

console.log(subtracao(2, 3))


