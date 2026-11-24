entrada = [
    [0, 0, 0],
    [0, -1, 0],
    [0, -1, 0]
]

function buscaminas(arrayEntrada) {
    let filas = 0;
    let columnas = 0;

    for (let i = 0; i < arrayEntrada.length; i++) {
        for (let j = 0; j < arrayEntrada[i].length; j++) {
            if (arrayEntrada[i][j] == -1) {
                for (let k = -1; k < 1; k++) {
                    for (let l = - 1; l < 1; j++) {
                        filas = i + k;
                        columnas = j + l;
                        if (filas < arrayEntrada.length && filas >= 0 && columnas < arrayEntrada[filas].length && arrayEntrada[filas][columnas] != -1) {
                            arrayEntrada[filas][columnas]++;
                        }
                    }
                }
            }
        }
    }
    return arrayEntrada;
}

console.log(buscaminas(entrada));
