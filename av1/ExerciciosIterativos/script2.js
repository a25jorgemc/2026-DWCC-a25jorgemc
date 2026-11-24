// 2. Dado un array cos días da semana en minúsculas:

const diasSemana = ["luns", "martes", "mercores", "xoves", "venres", "sábado", "domingo"];

// a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.
const empezanM = diasSemana.filter(function (dia) {
    return dia.startsWith("m");
});

console.log(empezanM);

// b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
const empezaS = diasSemana.some(function (dia) {
    return dia.startsWith("s");
})
if (empezaS) {
    console.log("Algún dia empeza por s");

} else {
    console.log("Ningún día empeza por s");
}

// c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.
const acabaS = diasSemana.every(function (dia) {
    return dia.endsWith("s");
});

if (acabaS) {
    console.log("Todos os días empezan por s");

} else {
    console.log("Non todos os días empezan por s");
}

// d. Mostra por consola o primeiro día que empece por “m”.
const mostrarM = diasSemana.find(function (dia) {
    return dia.startsWith("m");
});
console.log("Primeiro dia que empeza por m: " + mostrarM);

// e. Mostra por consola a posición no array do primeiro día que empeza por “m”.

const mostrarPosiM = diasSemana.findIndex(function (dia) {
    return dia.startsWith("m");
});
console.log("Indice do rimeiro dia que empeza por m: " + mostrarPosiM);

// f. Crea un novo array cos días da semana en maiúsculas
const todoMaiusculas = diasSemana.map(function (dia) {
    return dia.toUpperCase();
})

console.log(todoMaiusculas);