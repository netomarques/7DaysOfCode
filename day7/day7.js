const prompt = require('prompt-sync')({ sigint: true });

let operacao = '';
let sair = "nao";
let valor1;
let valor2;

function isNumber(valor) {
    return /^-?\d+(\.\d+)?$/.test(valor);
}

function capturarValores() {
    let numerosValidos;
    do {
        valor1 = prompt(`Informe o primeiro número: `);
        valor2 = prompt(`Informe o segundo número: `);
        if (!isNumber(valor1) || !isNumber(valor2)) {
            console.log("por favor, informe apenas números");
            numerosValidos = false
        } else {
            valor1 = parseFloat(valor1);
            valor2 = parseFloat(valor2);
            numerosValidos = true;
        }
    } while (numerosValidos == false);
}

function somar() {
    return valor1 + valor2;
}

function subtrair() {
    return valor1 - valor2;
}

function multiplicar() {
    return valor1 * valor2;
}

function dividir() {
    if (valor2 == 0) {
        return "Não é possível dividir por 0";
    } else {
        return valor1 / valor2;
    }
}


do {
    operacao = prompt(`Escolha a operação - "soma" "subtracao" "multiplicacao" "divisao" ou "sair": `);
    switch (operacao) {
        case "soma":
            capturarValores();
            console.log(`${valor1} + ${valor2} =  ${somar()}`);
            break;
        case "subtracao":
            capturarValores();
            console.log(`${valor1} - ${valor2} =  ${subtrair()}`);
            break;
        case "multiplicacao":
            capturarValores();
            console.log(`${valor1} * ${valor2} =  ${multiplicar()}`);
            break;
        case "divisao":
            capturarValores();
            console.log(`${valor1} / ${valor2} =  ${dividir()}`);
            break;
        case "sair":
            sair = "sim";
            console.log("Até a próxima");
            break;
        default:
            console.log("Escolha uma das opções somente!");
            break;
    }
} while (sair == "nao");
