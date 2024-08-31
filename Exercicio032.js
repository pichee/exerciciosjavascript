//Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.
let escolha, escolhacomputador;

do {
    escolha = parseInt(prompt("Você vai escolher\n1-pedra\n2-papel\n3-tesoura\n"));
    escolhacomputador = Math.floor(Math.random() * 3) + 1;
    
    console.log(`Escolha do computador: ${escolhacomputador}`);
    
    if (escolha == 1) {
        console.log("Você jogou pedra");
    } else if (escolha == 2) {
        console.log("Você jogou papel");
    } else if (escolha == 3) {
        console.log("Você jogou tesoura");
    }

    if (escolhacomputador == 1) {
        console.log("O adversário jogou pedra");
    } else if (escolhacomputador == 2) {
        console.log("O adversário jogou papel");
    } else if (escolhacomputador == 3) {
        console.log("O adversário jogou tesoura");
    }

    // Resultado:
    if (escolha == escolhacomputador) {
        console.log("Deu empate");  
    } else if (escolha == 1 && escolhacomputador == 3) {
        console.log("Você ganhou");  
    } else if (escolha == 2 && escolhacomputador == 1) {
        console.log("Você ganhou");  
    } else if (escolha == 3 && escolhacomputador == 2) {
        console.log("Você ganhou");  
    } else {
        console.log("Você perdeu");
    }
} while (confirm("Deseja jogar novamente?"));