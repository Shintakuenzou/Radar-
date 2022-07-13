var num1 = prompt("Digite o primeiro número");
var num2 = prompt("Digite o segundo número");

num1 = parseFloat(num1);
num2 = parseFloat(num2)

console.log(num1, num2)


var operacao = prompt("Digite uma operação").toLocaleUpperCase();
var resultado = null


const operacaoAritimeticas = function (n1, n2) {
    if(operacao === "+") {
        resultado = n1 + n2
    } else if(operacao === "-"){
        resultado = n1- n2
    } else if(operacao === "*") {
        resultado = n1 * n2 
    } else if(operacao === "/") {
        resultado = n1 / n2
    } else {
        alert("Digite uma operação válida")
    }
    return resultado
}


const calcular = function (operacaoAritimeticas) {
    if(operacao === "+") {
        operacaoAritimeticas(num1, num2)
    } else if(operacao === "-"){
        operacaoAritimeticas(num1,num2)
    } else if(operacao === "*") {
        operacaoAritimeticas(num1,num2)
    } else if(operacao === "/") {
        operacaoAritimeticas(num1,num2)
    } else {
        alert("Digite uma operação válida")
        resultado = "Erro"
    }
    return resultado
}

document.write(`O resultado da operação ${num1} ${operacao} ${num2} é: ` + calcular(operacaoAritimeticas))