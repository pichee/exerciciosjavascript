//Exercício 16: Escreva um programa que determina o maior entre três números.
function maior() {
let numero1=parseFloat(prompt("digite um número:"));
let numero2=parseFloat(prompt("outro um número:"));
let numero3=parseFloat(prompt("mais um número:"));
if (numero1>=numero2 && numero1>=numero3){
  return numero1
}
else if(numero2>=numero1 && numero2>=numero3){
  return numero2
}
else{
  return numero3
}
}
numerogrande=maior()
console.log("O maior numero é",numerogrande)