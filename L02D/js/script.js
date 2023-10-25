//Receber 4 notas de um aluno, calcular a média, no final fornecer uma prova, para ver se ele será aprovado
var notaA = parseFloat(prompt("Informe a primeira nota do aluno:"))
var notaB = parseFloat(prompt("Informe a segunda nota do aluno:"))
var notaC = parseFloat(prompt("Informe a terceira nota do aluno:"))
var notaD = parseFloat(prompt("Informe a quarta nota do aluno:"))
var media = (notaA+notaB+notaC+notaD)/4
if(media > 6){
    alert(`A media de ${media} foi o suficiente para o aluno ser aprovado`)
} else{
    var notaProva = parseFloat(prompt("Informe a sua nota na prova:"))
    var novaMedia = (notaA+notaB+notaC+notaD+notaProva)/5
    if(novaMedia > 4){
        alert(`Sua nova media de: ${novaMedia} foi o suficiente para ser aprovado!`)
    } else{
        alert(`Sua nova media de: ${novaMedia} não foi o suficiente para ser aprovado!`)
    }
}