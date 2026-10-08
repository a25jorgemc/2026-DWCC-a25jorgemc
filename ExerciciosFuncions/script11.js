entrada = [
    [0, 0, 0],
    [0, -1, 0],
    [0, -1, 0]
]

function buscaminas(arrayEntrada) {
    for (let i = 0; i < arrayEntrada.length; i++) {
        for (let j = 0; j < arrayEntrada[i].length; j++) {
            if (arrayEntrada[i][j] == -1) {
                arrayEntrada[i][j + 1]++; //os da misma fila
            }
        }
    }
    return arrayEntrada;
}

console.log(buscaminas(entrada));
