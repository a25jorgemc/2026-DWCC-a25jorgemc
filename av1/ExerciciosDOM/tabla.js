const tablaId = document.getElementById("tabla");
const filas = Array.from(tablaId.rows);

let arrayCeldas = [];
for (let i = 0; i < filas.length; i++) {
    const element = filas[i];
    arrayCeldas.push(element.cells)
}

for (let i = 0; i < arrayCeldas.length; i++) {
    const element = arrayCeldas[i];
    for (let j = 0; j < arrayCeldas[i].length; j++) {
        const element2 = arrayCeldas[i][j];
        if (i == j) {
            element2.style.backgroundColor = "violet";
        }
    }
}