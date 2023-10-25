// Descrição: valor entre a faixa de 1 a 9 são permitidos
let valor = parseInt(prompt("Informe um valor!"))
if(valor>0 && valor<10){
    alert("O valor: "+valor+" é permitido")
} else {
    alert("O valor: "+valor+" não é permitido")
}