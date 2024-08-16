//Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.
function classificacao_estudante() {
  avaliacao=parseInt(prompt("Digite um o resultado da avaliação 0 a 100:"));
  if(avaliacao>=90){
    console.log("Aluno ficou com A++");
  }
  else if(avaliacao>=80){
    console.log("Aluno ficou com A");
  }
  else if(avaliacao>=70){
    console.log("Aluno ficou com B");
  }
  else if(avaliacao>=60){
    console.log("Aluno ficou com C");
  }
  else{
    console.log("Aluno ficou com E");
  }
}
classificacao_estudante()