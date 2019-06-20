const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
          console.log('Quadro de honra')
          break
        case 8: case 7:
          console.log('Aprovado')
          break
        case 6: case 5: case 4:
          console.log('recuperacao')
          console.log(nota)
          valor = 50
          
          break
        case 3: case 2: case 1: case 0:
          console.log('Reprovado')
          break
        default:
          console.log('Nota invalida amigo')

}
}

imprimirResultado(6.55)

let nota = 10
console.log(nota)
console.log(valor)
 


//E necessario colocar o break para parar o switch