const imprimirResultado = function (nota){
    if (nota >= 7){
        console.log('Aprovado')
    }else{
        consle.log('Reprovado')
    }
}

imprimirResultado(10)


//TESTE ALEM DA AULA


const resultado2 = function (media){
   if (media === NaN){
       console.log('Desculpe, mas isso não é número!!')
   }else{

    if (media >= 7){
        console.log('Boa garoto!!!')
    }else{
        console.log('Lamento')
        console.log(typeof media)
    }
}
}

resultado2('si')