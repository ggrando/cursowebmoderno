// Funcao em JS e First-Class object (Citizens)
//Higher-order function 

//Criar de forma literal e criar na function

function fun1() { }

//Armaezenar em uma variavel 

const fun2 = function () { }

//Armazenar em um array

const array = [function (a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 3))

const obj = {}
obj.falar = function() {return 'Alo'}
console.log(obj.falar()) 