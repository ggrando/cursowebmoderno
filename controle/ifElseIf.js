Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if (nota.entre(9, 10)){
            console.log('Quadro de honra')
        }else if  (nota.entre (7, 8.9)){
            console.log('Aprovado')
        }else if  (nota.entre (4, 6.99)){
            console.log('Recuperação')
        }else if (nota.entre (0, 3.99)){
            console.log('Recuperação')
        }else {
            console.log('Essa nota não é valida')
        }
}

imprimirResultado()