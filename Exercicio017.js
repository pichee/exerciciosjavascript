//Exercício 17: Escreva um programa que determina se um número é par ou ímpar.
function par_ou_impar() {
  numero=prompt("Digite um número:");
  if(numero%2==0){
    return console.log(numero,"É um número par")
  }else{
    return console.log(numero,"É um número impar")
  }
}
par_ou_impar()