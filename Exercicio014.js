//Exercício 14: Escreva um programa que verifica se um ano é bissexto.
//Nesse exercício, você vai criar uma função que recebe um ano e verifica se ele é bissexto. Um ano é bissexto se for divisível por 4, exceto os que são divisíveis por 100 mas não por 400.
function bisexto(ano) {
  if (ano % 400 === 0) {
    console.log("Esse ano é bissexto");
  } else if (ano % 100 === 0) {
    console.log("Esse ano não é bissexto");
  } else if (ano % 4 === 0) {
    console.log("Esse ano é bissexto");
  } else {
    console.log("Esse ano não é bissexto");
  }
}

bisexto(4);