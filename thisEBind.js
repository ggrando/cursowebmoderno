const pessoa ={
    saudacao : 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradigmas: Funcional e Orientação a objeto

//Ai temos o bind que coloca a função this para dentro da váriavel CONFUSO, agora fodeu 

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()