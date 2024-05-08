const prompt = require('prompt-sync')({ sigint: true });

const num = Math.floor(Math.random() * (10 - 1 + 1) + 1);
let tentativas = 1;

do {
    let resposta = prompt(`Adivinhe o número entre 1 a 10! Tentativa ${tentativas}: `);
    tentativas = tentativas + 1;
    if (resposta == num) {
        console.log(`Parabéns, você acertou! O número é ${num}.`);
        tentativas = 4;
    } else if (tentativas < 4) {
        console.log(`Tente mais uma vez `)
    } else {
        console.log(`Que pena você não conseguiu acertar. O número é ${num}! `);
    }
} while (tentativas < 4);
