//Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.
function verificar_voto(idade){
  if(idade<18){
    console.log("Idade inválida");
  }
  else if(idade>=70){
    console.log("Voto facultativo");
  }
  else{
    console.log("Voto obrigatório ")
  }
}
verificar_voto(18);