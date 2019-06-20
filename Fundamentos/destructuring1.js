//Novo objeto do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const { nome, idade } = pessoa
console.log(nome, idade)

//criando variavel com o valor

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logradouro, numero}} = pessoa

console.log (logradouro, numero)