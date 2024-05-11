const prompt = require('prompt-sync')({ sigint: true });

let lista = [[], [], [], []];
let continuar;
let adicionarOuRemover;

function imprimirLista(lista, categoria) {
    let comida = "";
    lista.forEach(function (item, indice, array) {
        if (array.length != indice + 1) {
            comida = comida.concat(item + ", ");
        }
        else {
            comida = comida.concat(item);
        }
    });
    console.log(`   ${categoria}: ${comida}`);
}

function adicionarComida() {
    let categoria;
    let comida = prompt("Qual comida deseja inserir? ");
    let sair;
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
}

function removerComida() {
    let comida;
    let removido = false;
    console.log("");
    console.log("Lista de compras: ");
    imprimirLista(lista[0], "Frutas");
    imprimirLista(lista[1], "Laticínios");
    imprimirLista(lista[2], "Congelados");
    imprimirLista(lista[3], "Doces");
    comida = prompt("Qual comida deseja remover? ");
    lista.forEach(element => {
        for (let index = 0; index < element.length; index++) {
            if (element[index] == comida) {
                removido = delete element[index];
                break
            }
        }
    });

    if (!removido) {
        console.log(`${comida} não foi encontrada `);
    }
}

function existeComidaCadastrada() {
    let existe = false;
    lista.forEach(element => {
        if (element.length > 0) {
            existe = true;
        }
    });
    return existe;
}

do {
    if (!existeComidaCadastrada()) {
        continuar = prompt(`Deseja adicionar uma comida na lista de compras? "sim" ou "nao": `);
    } else {
        continuar = prompt(`Deseja adicionar ou remover uma comida na lista de compras? "sim" ou "nao": `);
    }

    switch (continuar) {
        case "sim":
            if (!existeComidaCadastrada()) {
                adicionarComida();
            } else {
                do {
                    adicionarOuRemover = prompt(`"Adicionar" ou  "Remover"? `);
                    switch (adicionarOuRemover) {
                        case "Adicionar":
                            adicionarComida();
                            break;
                        case "Remover":
                            removerComida();
                            break;
                        default:
                            console.log(`Responda apenas "Adicionar" ou "Remover" `);
                            break;
                    }
                } while (adicionarOuRemover != "Adicionar" && adicionarOuRemover != "Remover");
            }
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
