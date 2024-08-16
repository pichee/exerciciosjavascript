//Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.
function verificadoridade() {
  idade=prompt("Digite sua idade:");
  if (idade>=18){
    return console.log("Você tem idade para dirigir ");
  }
  else{
    return console.log("Você não tem idade para dirigir ");
  }
}
verificadoridade();
