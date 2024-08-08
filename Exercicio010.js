//Exercício 10: Escreva um programa que recebe duas notas de um aluno, calcula a média e imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).
let nota=prompt("Digite a primeira nota:")
nota=parseFloat(nota)
let nota2=prompt("Digite a segunda nota:")
nota2=parseFloat(nota2)
media=(nota+nota2)/2
console.log("Media é igual a",media)