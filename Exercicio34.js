//Exercício 34: Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz).
for(let i=1;i<=100;i++){
  if(i%3==0 && i%5==0){
    console.log("FizzBuzz")
  }
  else if(i%3==0){
    console.log("Fizz")
  }
  else if(i%5==0){
    console.log("Buzz")
  }
  else{
    console.log(i)
  }
}