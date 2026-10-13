// 2. Dado un array cos días da semana en minúsculas:
// b. Mostra unha mensaxe indicando se algún día comeza por ‘s’.
// c. Mostra unha mensaxe indicando se todos os días acaban en ‘s’.
// d. Mostra por consola o primeiro día que empece por “m”.
// e. Mostra por consola a posición no array do primeiro día que empeza por “m”.
// f. Crea un novo array cos días da semana en maiúsculas

const diasSemana = ["luns", "martes", "mercores", "xoves", "venres", "sábado", "domingo"];

// a. Obtén un novo array cos días que empecen por “m” e móstrao por consola.
const empezanM = diasSemana.filter(function (dia) {
    return dia.startsWith("m")
})

console.log(empezanM);