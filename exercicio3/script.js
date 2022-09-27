function somarNumeros(n1, n2){
    const soma = n1 + n2;
    return soma 
}
function subtrairNumeros(n1, n2){
    const subtrair = n1 - n2;
    return subtrair 
}
function multiplicarNumeros(n1, n2){
    const multiplicar = n1 * n2;
    return multiplicar
}
function DividirNumeros(n1, n2){
    const dividir = n1 / n2;
    return dividir
}


const numero1 = +prompt("Digite o número 1:");
const numero2 = +prompt("Digite o número 2:");

console.log(`Soma: ${somarNumeros(numero1,numero2)}`)
console.log(`subtrair: ${subtrairNumeros(numero1,numero2)}`)
console.log(`multiplicar: ${multiplicarNumeros(numero1,numero2)}`)
console.log(`dividir: ${DividirNumeros(numero1,numero2)}`)     

  