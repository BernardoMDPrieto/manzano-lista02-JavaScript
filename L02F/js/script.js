var valorA = parseInt(prompt("Informe o valor A:"))
var valorB = parseInt(prompt("Informe o valor B:"))
var valorC = parseInt(prompt("Informe o valor C:"))
var armario
if(valorA > valorB){
    armario = valorA
    valorA = valorB
    valorB = armario
}
if(valorC < valorB){
    armario = valorC
    valorC = valorB
    valorB = armario
}
if(valorB<valorA){
    armario = valorA
    valorA = valorB
    valorB = armario
}
alert("Menor valor: "+ valorA + "\n Médio valor: "+ valorB + "\n Maior valor: "+ valorC)
