function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
linha = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`${linha}) Opção escolhida foi ${opcao}.`)
    linha++
}

console.log('Fim de código')

let qualquer = 0

while (qualquer != 9999){
    console.log(qualquer)
    qualquer++
}
