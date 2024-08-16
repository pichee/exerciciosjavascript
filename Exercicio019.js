//Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.
function name() {
  numero_menor=prompt("Digite um número para seu intervalo:");
  numero_maior=prompt("Digite outro número para seu intervalo:");
  numero_digitado=prompt("Digite outro número para seu intervalo:");
  
  if (numero_maior==numero_menor){
    return console.log("Os numeros não podem ser iguais ");
  }
  if (numero_menor>numero_maior){
    auxiliar=numero_maior;
    numero_maior=numero_menor;
    numero_menor=auxiliar;
  }
  if (numero_digitado>numero_menor && numero_digitado<numero_maior){
    return console.log(numero_digitado,"Esta no intervalo desejado")
  }
  else{
   return console.log(numero_digitado,"Não esta no intervalo desejado")
  }
}
name()