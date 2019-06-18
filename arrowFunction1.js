let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(Math.PI)) //Chama o valor de PI para multiplicar hahaha

Ola = () => 'Olá'
Ola = _ => 'Olá' // possui um param vazio

console.log(Ola())