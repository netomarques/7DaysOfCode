const prompt = require('prompt-sync')({ sigint: true });

let area;
let linguagem;
let especializar;
let sair;
let tecnologia;

do {
    area = prompt("Seguir para Área de Front-End ou Back-End? Responda com nome da área: ");
    if (area != "Front-End" && area != "Back-End") {
        console.log(`Responda apenas com "Front-End" ou "Back-End"`);
    }
} while (area != "Front-End" && area != "Back-End");

console.log("");

if (area == "Front-End") {
    do {
        linguagem = prompt("Aprender React ou Vue? ");
        if (linguagem != "React" && linguagem != "Vue") {
            console.log(`Responda apenas com "React" ou "Vue"`);
        }
    } while (linguagem != "React" && linguagem != "Vue");
} else if (area == "Back-End") {
    do {
        linguagem = prompt("Aprender C# ou Java? ");
        if (linguagem != "C#" && linguagem != "Java") {
            console.log(`Responda apenas com "C#" ou "Java"`);
        }
    } while (linguagem != "C#" && linguagem != "Java");
}

console.log("");

do {
    especializar = prompt(`Especializar em ${area} ou FullStack? `);
    if (especializar != area && especializar != "FullStack") {
        console.log(`Responda apenas com "${area}" ou "FullStack" `);
    }
} while (especializar != area && especializar != "FullStack");

if (especializar == area) {
    console.log(`Continue estudando ${linguagem} para se especializar em ${area}`);
} else {
    console.log(`Estude outras tecnologias para ser FullStack`);
}

console.log("");

do {
    sair = prompt(`Tem mais alguma tecnologia que você gostaria de aprender? Se gostaria digite "ok" `);
    if (sair == "ok") {
        tecnologia = prompt("Qual tecnologia? ");
        console.log(`Show, procure conteúdos relacionados com ${tecnologia} para estudar e assim conseguir oportunidades`);
    }
} while (sair == "ok");