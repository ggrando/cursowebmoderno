let isAtivo = false //isAtivo é o nome da var
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


isAtivo = 1
console.log(!!isAtivo) ///<- Aqui ocorre o seguinte, como você usa duas negações ele vai exibir o valor cerrto


//Todo número inteiro com excessão do 0 é verdadeiro

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //Vazio é verd
console.log(!![]) // outro exemplo
console.log(!!{})
console.log(!!Infinity) ///Inifinito é verdade
console.log(!!(isAtivo = true))

console.log('Os Falsos...')
console.log (!!0) //zero é falso
console.log(!!'') //String vazia é falso
console.log(!!null) //valores nulos é falso
console.log(!!NaN) //Not a number, se não é número
console.log(!!undefined) 
console.log(!!(isAtivo = false))

console.log('outro exemplo')
console.log(!!('' || null || 0 || ' ' )) //pelo menus dos valores tem que ser verdadeiro para voltar true, no caso '' é verdadeiro || -> OU