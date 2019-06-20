//Aula sobre strings novo JS

const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna a letra que está na posição 4, no caso R
console.log(escola.charAt(5)) // Teste colocando um char que não está no valor ;)

console.log(escola.charCodeAt(3)) //Pega o valor do texto na tabela asci

console.log(escola.indexOf('3')) // Descobre o indíce que aquele número está na palavra, por exemplo o digito de posição 3 no texto é o próprio 3 =)

console.log(escola.substring(1)) //Mata o primeiro(0) e fala só o que vêm depois.

console.log(escola.substring(1, 3)) //Começa no zero e vai até o terceiro

console.log('Escola '.concat(escola).concat("!")) // Passo no console log uma váriavel
console.log('Escola ' + (escola) + ("!")) // O "+" substitui o comando concat, se um número estiver na abertura da string vai dar bom

console.log(escola.replace(3, 'e')) //Substitui o 3 por e

console.log('Ana, Maria, Pedro'.split(','))