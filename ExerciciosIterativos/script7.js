const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
// a. Filtra o array de inventores e crea un array só cos inventores que naceron no século XVI.
const soloXVI = inventors.filter(function (obxecto) {
    return obxecto.year > 1500 && obxecto.year < 1601;
})
console.log(soloXVI);


// b. Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac Newton", ...]
const soloNome = inventors.map(function (obxecto) {
    return obxecto.first + " " + obxecto.last;
})
console.log(soloNome);

// c. Unha vez obtido o array co nome completo dos inventores do exercicio
// anterior, ordénao alfabeticamente polo apelido.

function ordenarApelidoB(a, b) {
    const apeA = a.slice(a.indexOf(" "));
    const apeB = b.slice(b.indexOf(" "));

    if (apeA < apeB) {
        return -1;
    } else if (apeA > apeB) {
        return 1;
    } else {
        return 0;
    }
}
const ordenadoB = soloNome.sort(ordenarApelidoB);
console.log(ordenadoB);

// d. Ordena alfabeticamente polo apelido o array de obxectos inventores inicial.
function ordenarApelido(a, b) {
    const apeA = a.last;
    const apeB = b.last;

    if (apeA < apeB) {
        return -1;
    } else if (apeA > apeB) {
        return 1;
    } else {
        return 0;
    }
}
const ordenado = inventors.sort(ordenarApelido);
console.log(ordenado);

// e. Ordena o array de inventores pola data de nacemento.
function ordenarData(a, b) {
    const apeA = a.year;
    const apeB = b.year;

    if (apeA < apeB) {
        return -1;
    } else if (apeA > apeB) {
        return 1;
    } else {
        return 0;
    }
}
const ordenadoData = inventors.sort(ordenarData);
console.log(ordenadoData);

// f. Calcula a suma dos anos que viviron todos os inventores.

function reducer(accumulator, currentValue) {
    accumulator += currentValue.passed - currentValue.year;

    return accumulator;
}

let resultado = inventors.reduce(reducer, 0);
console.log(resultado);

// g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo
function ordenarLonsevo(a, b) {
    const lonsevoA = a.passed - a.year;
    const lonsevoB = b.passed - b.year;

    if (lonsevoA < lonsevoB) {
        return 1;
    } else if (lonsevoA > lonsevoB) {
        return -1;
    } else {
        return 0;
    }
}
const ordenadoLonsevo = inventors.sort(ordenarLonsevo);
console.log(ordenadoLonsevo);