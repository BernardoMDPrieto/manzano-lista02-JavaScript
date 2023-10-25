// Informar uma mensagem de saudação para homem ou mulher
let nome = prompt("Informe o nome do usuário!")
let genero = prompt("Informe o gênero do usuário! masculino ou feminino: (m/f)")
if (genero == "m"){
    alert(`Saudações ${nome} Illmo Sr.`)
} else if(genero == "f"){
    alert(`Saudações ${nome} Illma Sra.`)
} else{
    alert(`Informação incorreta`)
}