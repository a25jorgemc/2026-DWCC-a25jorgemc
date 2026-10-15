// Dada a seguinte información, obtén un obxecto con unha propiedade para cada
// medio de transporte, indicando o número de veces que se repite no array.É dicir, o resultado debería ser 
// { car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1 }.
// Intentar facer o exercicio usando o método reduce

const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    "pogostick",
];

// let vehiculo = {};

// function reducer(accumulator, currentValue, index, array) {

//     if (!Object.hasOwn(vehiculo, currentValue)) {
//         vehiculo[currentValue] = 1;
//     } else {
//         vehiculo[currentValue]++;
//     }

//     return vehiculo;
// }
// console.log(data.reduce(reducer, 0));



function reducer(accumulator, currentValue, index, array) {

    if (!Object.hasOwn(accumulator, currentValue)) {
        accumulator[currentValue] = 1;
    } else {
        accumulator[currentValue]++;
    }

    return accumulator;
}
console.log(data.reduce(reducer, {}));