//Informar um valor, caso ele seja negativo, será convertido para positivo
var numero = parseInt(prompt("Informe um valor, caso ele seja negativo, será convertido para positivo"))
if(numero < 0){
    var conversao = numero*-1
    alert(`O valor da conversão é de: ${conversao}`)
} else{
    alert(`O valor é ${numero} já é positivo`)
}