//Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.
function maior25(numero) {
  let i=25;
  for (i = 0; i <= 25; i++) {
    if(i==numero){
      console.log("O numero escolhido foi:",i)
      break;
    }
  }
}
function menor25(numero) {
  let i=0;
  for (let i = 0; i <= 25; i++) {
    if(i==numero){
      console.log("O numero escolhido foi:",i)
    }
  }
}

let numero=prompt("Digite o número:")
if (numero>=25){
  maior25(numero);
}
else{
  menor25(numero);
}