var valorA = parseInt(prompt("Informe o valor A:"))
var valorB = parseInt(prompt("Informe o valor B:"))
var valorC = parseInt(prompt("Informe o valor C:"))
var delta = (valorB ** 2 ) - 4 * (valorA * valorC)
var valorPositivo = parseFloat((-valorB) + Math.sqrt(delta)) / (2 * valorA)
var valorNegativo = parseFloat((-valorB) - Math.sqrt(delta)) / (2 * valorA)
alert(delta)
if (valorA = 0) {
    alert("Equação de primeiro grau")
} else if (delta >= 0) {
    alert("O valor de X positivo é de: " + valorNegativo)
    alert("O valor de X negativo é de: " + valorPositivo)
} else{
    alert("A equação não possui raizes reais")
}