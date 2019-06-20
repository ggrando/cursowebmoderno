function area (largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`valor maior que o permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2, 4, 17, 22, 44))
console.log(area(5, 5))