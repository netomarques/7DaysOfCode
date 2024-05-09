const prompt = require('prompt-sync')({ sigint: true });

let lista = [[], [], [], []];
let continuar;
let comida;
let sair;
let categoria;

function imprimirLista(lista, categoria) {
    let produto = "";
    lista.forEach(function (item, indice, array) {
        if (array.length != indice + 1) {
            produto = produto.concat(item + ", ");
        }
        else {
            produto = produto.concat(item);
        }
    });
    console.log(`   ${categoria}: ${produto}`);
}

do {
    continuar = prompt(`Deseja adicionar uma comida na lista de compras? "sim" ou "nao": `);

    switch (continuar) {
        case "sim":
            comida = prompt("Qual comida deseja inserir? ");
            do {
                sair = "sim";
                categoria = prompt(`Qual a categoria ${comida} se encaixa? "Frutas", "Laticinios", "Congelados", "Doces": `);

                switch (categoria) {
                    case "Frutas":
                        lista[0].push(comida);
                        break;
                    case "Laticinios":
                        lista[1].push(comida);
                        break;
                    case "Congelados":
                        lista[2].push(comida);
                        break;
                    case "Doces":
                        lista[3].push(comida);
                        break;
                    default:
                        console.log("Responda apenas com o nome de uma categoria que exista!");
                        sair = "nao";
                        break;
                }
            } while (sair == "nao");
            break;
        case "nao":
            break;
        default:
            console.log(`Responda apenas com "sim" ou "nao"`);
            break;
    }
} while (continuar != "nao");

console.log("");
console.log("Lista de compras: ");
imprimirLista(lista[0], "Frutas");
imprimirLista(lista[1], "Laticínios");
imprimirLista(lista[2], "Congelados");
imprimirLista(lista[3], "Doces");
