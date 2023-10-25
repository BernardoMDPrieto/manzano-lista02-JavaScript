//Calcular a média de 4 notas de um aluno em seguida informar se ele foi aprovado ou não
var notaA = parseFloat(prompt("Informe a primeira nota do aluno:"))
var notaB = parseFloat(prompt("Informe a segunda nota do aluno:"))
var notaC = parseFloat(prompt("Informe a terceira nota do aluno:"))
var notaD = parseFloat(prompt("Informe a quarta nota do aluno:"))
var media = (notaA+notaB+notaC+notaD)/4
if(media > 4){
    alert(`A media de ${media} foi o suficiente para o aluno ser aprovado`)
} else{
    alert(`A media de ${media} não foi o suficiente para o aluno ser aprovado`)
}