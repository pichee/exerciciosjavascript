//33-Neste exercício, você precisa imprimir os primeiros 10 números da sequência de Fibonacci. A sequência de Fibonacci é uma sequência de números onde cada número subsequente é a soma dos dois anteriores. Ela começa assim: 0, 1, 1, 2, 3, 5, 8, 13...
let numero=1
let penultimo=0
let aux=0
let i=0
console.log(penultimo)
console.log(numero)
for(i=0;i<8;i++){
  aux=numero
  numero=numero+penultimo
  penultimo=aux
  
  console.log(numero)
}