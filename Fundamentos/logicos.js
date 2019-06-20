 function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ou
    const comprarTV50 = trabalho1 && trabalho2 //e
    //const comprarTV32 = !!(trabalho1 ^trabalho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operadoruniario

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} //Nao e necessario par chave valor, pq ele vai assumir que o nome e o valor
 }

 console.log(compras(false, false))

 //MANTER SAUDAVEl e o oposto de comprar sorvete


 console.log(compras(true, true))
 console.log(compras(true, false))