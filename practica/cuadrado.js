// Crea unha función cadrado(n) que mostre pola consola un cadrado de asteriscos de tamaño n.
// Exemplo para cadrado(4):
// ****
// ****
// ****
// ****

function cadrado(n) {
    let cadea = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            cadea += "*"
        }
        console.log(cadea);
        cadea = "";

    }
}

cadrado(3);