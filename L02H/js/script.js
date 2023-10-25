let valorA = parseInt(prompt("Informe o primeiro valor"))
let valorB = parseInt(prompt("Informe o segundo valor"))
let valorC = parseInt(prompt("Informe o terceiro valor"))
let valorD = parseInt(prompt("Informe o quarto valor"))
let valorE = parseInt(prompt("Informe o quinto valor"))
let menorValor = 0
let maiorValor = 0
if (valorA > valorB && valorA > valorC && valorA > valorD && valorA > valorE) {
    maiorValor = valorA
} 
if (valorA < valorB && valorA < valorC && valorA < valorD && valorA < valorE) {
    menorValor = valorA
 
}
if (valorB > valorA && valorB > valorC && valorB > valorD && valorB > valorE) {
    maiorValor = valorB

} 
 if (valorB < valorA && valorB < valorC && valorB < valorD && valorB < valorE) {
    menorValor = valorB

}
if (valorC > valorA && valorC > valorB && valorC > valorD && valorC > valorE) {
    maiorValor = valorC

} 
 if (valorC < valorA && valorC < valorB && valorC < valorD && valorC < valorE) {
    menorValor = valorC

}
if (valorD > valorA && valorD > valorB && valorD > valorC && valorD > valorE) {
    maiorValor = valorD
  
} 
 if (valorD < valorA && valorD < valorB && valorD < valorC && valorD < valorE) {
    menorValor = valorD
    
}
if (valorE > valorA && valorE > valorB && valorE > valorC && valorE > valorD) {
    maiorValor = valorE
   
} 
 if (valorE < valorA && valorE < valorB && valorE < valorC && valorE < valorD) {
    menorValor = valorE
}
alert("O maior valor é: " + maiorValor + "\n O menor valor é: " + menorValor)

