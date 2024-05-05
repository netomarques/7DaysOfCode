const entrada = require('prompt-sync')();

const nome = entrada("Qual o seu nome? ");
const idade = entrada("Quantos anos você tem? ");
const linguagem = entrada("Qual linguagem de programação você está estudando? ");

console.log('');
console.log('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagem + '!');

let resposta = 0;
do {
    resposta = entrada('Você gosta de estudar ' + linguagem + '? Responda com o número 1 para SIM ou 2 para NÃO: ');
} while (resposta != 1 && resposta != 2);

if (resposta == 1) {
    console.log('Muito bom! Continue estudando e você terá muito sucesso.');
} else {
    console.log('Ahh que pena... já tentou aprender outras linguagens?');
}

/*Console navegador
const nome = prompt("Qual o seu nome? ");
const idade = prompt("Quantos anos você tem? ");
const linguagem = prompt("Qual linguagem de programação você está estudando? ");
alert('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagem + '!');

let resposta = 0;
do {
    resposta = prompt('Você gosta de estudar ' + linguagem + '? Responda com o número 1 para SIM ou 2 para NÃO: ');
} while (resposta != 1 && resposta != 2);

if (resposta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.');
} else {
    alert('Ahh que pena... já tentou aprender outras linguagens?');
}
*/