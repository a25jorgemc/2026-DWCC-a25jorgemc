const persoas = [
    { nome: 'aaron', idade: 65, id: 1 },
    { nome: 'beth', idade: 2, id: 2 },
    { nome: 'ánxeles', idade: 13, id: 3 },
    { nome: 'daniel', idade: 3, id: 4 },
    { nome: 'ada', idade: 25, id: 5 },
    { nome: 'erea', idade: 1, id: 6 },
    { nome: 'navia', idade: 43, id: 7 },
];
// a. Crea un novo array que conteña só as persoas maiores de idade.
const maioresDeIdade = persoas.filter(function (persoa) {
    return persoa.idade >= 18;
})
console.log(maioresDeIdade);

// b. Crea un novo array que conteña os nomes (só os nomes) de todas as
// persoas.

const mostrarNomes = persoas.map((persoa) => persoa.nome);
console.log(mostrarNomes);

// c. Crea un novo array que conteña, en maiúsculas, os nomes das persoas
// maiores de idade.

const mostrarNomesMaiores = persoas.filter(function (persoa) {
    return persoa.idade >= 18;
}).map((persoa => persoa.nome.toUpperCase()))
console.log(mostrarNomesMaiores);

// d. Crea un novo array que conteña obxectos só co id e o nome das persoas
const mostrarIdNome = persoas.map((persoa) => ({
    id: persoa.id,
    nome: persoa.nome
}));
console.log(mostrarIdNome);
