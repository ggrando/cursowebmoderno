//par nome/valor
const saudacao = 'Opa' //Contexto lexico 1

function exec() {
    const saudacao = 'Falaaaa' //Contexto lexico 2
    return saudacao
}

//Resumidamente, a function esta tratando as variaveis dentro do contexto dois, isso faz com que ela nao veja as 
//variaveis de fora, porem, se ele nao achar ele vai para o cotexto maior.

//Objetos sao grupos aninhados de pares nome/valor

const cliente = 
{
    nome: 'Pedro',
    idade:32,
    peso:90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)