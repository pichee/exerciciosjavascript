//Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.
let escolha=parseInt(prompt("Voce vai escolher\n1-pedra\n2-papel\n3-tesoura\n"))
let escolhacomputador=Math.floor(Math.random()*3);
escolhacomputador=escolhacomputador+1
console.log(escolhacomputador)
if(escolha==1){
  console.log("Voce jogou pedra")
}
if(escolha==2){
  console.log("Voce jogou papel")
}
if(escolha==3){
  console.log("Voce jogou tesoura")
}
if(escolhacomputador==1){
  console.log("O adversario jogou pedra então")
}
if(escolhacomputador==2){
  console.log("O adversario jogou papel então")
}
if(escolhacomputador==3){
  console.log("O adversario jogou tesoura então")




//Resultado:
if(escolha==escolhacomputador){
   console.log("Deu empate");  
}
else if(escolha==1 && escolhacomputador==3){
  console.log("Voce ganhou");  
}
else if(escolha==2 && escolhacomputador==1){
  console.log("Voce ganhou");  
}
else if(escolha==3 && escolhacomputador==2){
  console.log("Voce ganhou");  
}else{
  console.log("Voce perdeu");
  }}
