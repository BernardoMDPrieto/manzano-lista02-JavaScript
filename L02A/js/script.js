var valorA = parseInt(prompt("Informe o primeiro valor"))
var valorB = parseInt(prompt("Informe o segundo valor"))
if(valorA > valorB){
    var diferencaMaiorMenor = valorA-valorB
    alert("A diferença do maior pelo menor é: " + diferencaMaiorMenor)
} else{
    var diferencaMaiorMenor = valorB-valorA
    alert("A diferença do maior pelo menor é: " + diferencaMaiorMenor)
}