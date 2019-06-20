let  numero = 1
let globalvar = 10
{
    let numero = 2
    console.log('Dentro = ', numero)
    console.log('Global = ', globalvar) //Quando ela nao existe dentro ele busca fora
    //Let tem escopo somente dentro do bloco
}

console.log('Fora = ', numero)


let escopo1 = 1 
{ let escopo1 = 2
    { let escopo1 = 3
        { let escopo1 = 4
            { let escopo1 = 5
                { 
                    console.log(escopo1) //Ele vai sempre buscar a mais proxima
                }
            }
        }
    }
}
