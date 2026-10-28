// Fai unha función que ordene as notas dun array pasado como parámetro. Por
// exemplo, se se pasa o array [4,8,3,10,5] debe devolver [3,4,5,8,10]. Debes utilizar a
// función sort e pasarlle como parámetro unha función que ti definas e que sirva para
// realizar a comparación de elementos.

const numeros = [4, 8, 3, 10, 5];

function ordenarAscendente(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
const ordenado = numeros.sort(ordenarAscendente);
console.log(numeros);
