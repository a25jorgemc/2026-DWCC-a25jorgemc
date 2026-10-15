const numeros = [1, 5, 8, -2, 2];

function reducer(accumulator, currentValue) {

    if (currentValue > accumulator) {
        accumulator = currentValue;
    }

    return accumulator;
}

let resultado = numeros.reduce(reducer, numeros[0]);
console.log(resultado);
