//Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.
let numero=8
function verificar(numero){
  if (numero>0){
    console.log("Numero é positivo");
  }
  else if(numero<0){
    console.log("Numero é negativo");
  }
  else{
    console.log("Numero é zero");
  }
}
verificar(5);