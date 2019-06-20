const valores = [7.7 , 8.9, 6.3, 9.2] //Os valores são sepaarados por virgulas

//Array é uma estrutura indexada.
//Exemplo de acesso nos indices

console.log(valores[0], valores[3])
console.log(valores[4]) //valor indefinido

//O array de index 4 é invalido

//E durante a execução você consegue alterar o valor de determinada classe do array, exemplo:

valores[4] = 10
console.log(valores[4])

//Acessando valores de variaveis

console.log(valores.length) //<- Essa ação vai mostrar quantos valores possui

 //Execluindo valor do Array

console.log(valores)
valores.pop() //Vai excluir o ultimo
console.log(valores) //Agora não possuí mais o valor 10

delete valores[0]
console.log(valores) //Será mostrado como empty

console.log(typeof valores)


<script type="text/javascript" id="" src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/97ae20bb-4d2a-44d5-810c-eaa496442a65-loader.js"></script>
<script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/97ae20bb-4d2a-44d5-810c-eaa496442a65-loader.js"></script>

