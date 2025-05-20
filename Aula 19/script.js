function mostrarIdade () {
let idade = parseInt (document.getElementById('idadeInput').value);
let resultadoElement = document.getElementById('resultado');

let mensagem = "";

if (isNaN(idade)) { mensagem = "Não digitou idade.";}

else if (idade < 0) { mensagem = "Idade Inválida.";}

else if (idade === 0) { mensagem = "Recém-nascido.";}

else if (idade > 0)

resultadoElement.textContent = mensagem;

}