function getInteiroAleatorioEntre (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
   
}

let opcao = -1
linha = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`${linha}) Opção escolhida foi ${opcao}.`)
    linha++
} while(opcao != -1)

console.log('Fim de código')
