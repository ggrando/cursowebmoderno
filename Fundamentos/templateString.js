const nome ='Rebeca'
const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

//Dentro de uma string eu consig acessar uma outra váriavel e carreagar tudo junto (((NÃO QUEBRAR LINHA)))

// CRIANDO UM TEMPLANTE STRING

const template = `
    Olá
    ${nome}!`
    console.log(concatenacao,template)

    //Expressoes ....
    //Você consegue colocar expressoes dentro do console, sempre que estiver dentro de ${}

    //Exemplo

    console.log(`1 + 1 = ${1 + 1}`) //Ele só vai executar a operação dentro do dolar

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${nome} ${up('cuidado')}!`) //O UP É UMA VÁRIAVEL CRIADA COM A AÇÃO DE UPPERCASE
    