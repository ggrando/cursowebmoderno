function tratarErroElancar(erro){
    //throw new Error('Ocorreu um erro de processamento, ja fomos notificados sobre isso....')
    //throw 10
    //throw 'Deu merda no código'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!!!')
    } catch (e){
        tratarErroElancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)
